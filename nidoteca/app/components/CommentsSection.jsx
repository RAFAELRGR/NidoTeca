"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Carlos Mendoza",
      avatar: "/perfil.jpg",
      date: "Hace 2 días",
      content: "El proceso de formalización fue más sencillo de lo que pensé. La asesoría que recibí me ayudó a entender todos los pasos necesarios para mi negocio de repostería.",
      replies: [
        {
          id: 2,
          name: "Asesor Legal",
          avatar: "/perfil.jpg",
          date: "Hace 1 día",
          content: "¡Nos alegra mucho escuchar eso Carlos! Recuerda que ahora que estás formalizado puedes acceder a los beneficios de la Cámara de Comercio."
        }
      ]
    },
    {
      id: 3,
      name: "Ana Lucía Torres",
      avatar: "/perfil.jpg",
      date: "Hace 1 semana",
      content: "Tengo una duda sobre los requisitos para formalizar un negocio de consultoría. ¿Alguien podría orientarme?",
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    if (replyingTo) {
      const updatedComments = comments.map(comment => {
        if (comment.id === replyingTo) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                name: "Usuario Nuevo",
                avatar: "/perfil.jpg",
                date: "Ahora mismo",
                content: newComment
              }
            ]
          };
        }
        return comment;
      });
      setComments(updatedComments);
    } else {
      setComments([
        ...comments,
        {
          id: Date.now(),
          name: "Usuario Nuevo",
          avatar: "/perfil.jpg",
          date: "Ahora mismo",
          content: newComment,
          replies: []
        }
      ]);
    }

    setNewComment("");
    setReplyingTo(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
            Experiencias de Emprendedores
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Comparte tu experiencia con el proceso de formalización
          </p>
        </motion.div>

        {/* Formulario de comentario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <label htmlFor="comment" className="sr-only">Tu comentario</label>
              <textarea 
                id="comment" 
                rows="4"
                className="w-full px-0 text-gray-700 bg-transparent border-0 focus:ring-0 focus:outline-none"
                placeholder={replyingTo ? "Escribe tu respuesta..." : "Comparte tu experiencia con la formalización..."}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-green-700 transition-all shadow-md"
              >
                {replyingTo ? "Publicar respuesta" : "Publicar comentario"}
              </button>
              {replyingTo && (
                <button
                  type="button"
                  onClick={() => setReplyingTo(null)}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Lista de comentarios */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="space-y-4">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
              >
                <footer className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="relative h-10 w-10">
                      <Image
                        src={comment.avatar}
                        alt={comment.name}
                        fill
                        className="rounded-full object-cover border-2 border-blue-200"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">{comment.name}</p>
                      <p className="text-sm text-gray-500">{comment.date}</p>
                    </div>
                  </div>
                </footer>
                <p className="text-gray-700 pl-13">{comment.content}</p>
                <div className="flex items-center mt-4 pl-13">
                  <button 
                    type="button"
                    onClick={() => setReplyingTo(comment.id)}
                    className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    <svg className="mr-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Responder
                  </button>
                </div>
              </motion.article>

              {/* Respuestas */}
              {comment.replies.length > 0 && (
                <div className="ml-8 lg:ml-12 space-y-4">
                  {comment.replies.map((reply) => (
                    <motion.article
                      key={reply.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-sm"
                    >
                      <footer className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="relative h-10 w-10">
                            <Image
                              src={reply.avatar}
                              alt={reply.name}
                              fill
                              className="rounded-full object-cover border-2 border-blue-200"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-blue-900">{reply.name}</p>
                            <p className="text-sm text-gray-500">{reply.date}</p>
                          </div>
                        </div>
                      </footer>
                      <p className="text-gray-700 pl-13">{reply.content}</p>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comentario de asesoría */}
        <motion.article 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-6 mt-8 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl border border-blue-200 shadow-sm"
        >
          <footer className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/perfil.jpg"
                  alt="Asesor Oficial"
                  fill
                  className="rounded-full object-cover border-2 border-blue-300"
                />
              </div>
              <div>
                <p className="font-semibold text-blue-900">Asesoría de Formalización</p>
                <p className="text-sm text-blue-600">Oficial</p>
              </div>
            </div>
          </footer>
          <p className="text-blue-800 pl-13">
            ¿Tienes dudas sobre el proceso de formalización? Nuestro equipo de asesores está disponible para ayudarte. 
            Puedes contactarnos a través del formulario de contacto o llamando al (601) 589-3000.
          </p>
        </motion.article>
      </div>
    </section>
  );
}