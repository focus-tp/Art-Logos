import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-xl', className = '' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className={maxWidth.includes('max-w-none') 
          ? "fixed top-0 left-0 w-screen h-screen z-[9999] bg-sky-200 overflow-hidden flex flex-col m-0 p-0 rounded-none border-none" 
          : "fixed inset-0 z-50 flex items-center justify-center p-4"}>
          
          {!maxWidth.includes('max-w-none') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={maxWidth.includes('max-w-none')
              ? `relative w-full h-full flex flex-col overflow-hidden ${className}`
              : `relative bg-white w-full ${maxWidth} max-h-[90vh] rounded-[28px] flex flex-col shadow-2xl overflow-hidden ${className}`
            }
          >
            {title && !maxWidth.includes('max-w-none') && (
              <div className="flex justify-between items-start pt-8 px-8 pb-4">
                <div className="font-fredoka text-2xl font-bold">{title}</div>
                <button 
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-sage-l flex items-center justify-center text-tx hover:bg-em-p hover:text-em transition-colors shrink-0"
                >
                  ✕
                </button>
              </div>
            )}
            {!(title && !maxWidth.includes('max-w-none')) && (
              <div className={maxWidth.includes('max-w-none') ? "fixed top-6 right-6 z-[10000]" : "absolute top-6 right-6 z-[110]"}>
                <button 
                  onClick={onClose}
                  className="bg-white/50 backdrop-blur-md rounded-full p-3 flex items-center justify-center text-tx hover:bg-white hover:text-em transition-colors shrink-0"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
            )}
            <div className={maxWidth.includes('max-w-none') ? "w-full h-full bg-sky-200 rounded-none m-0 p-0" : "w-full flex-1 overflow-y-auto custom-scroll"}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(modalContent, document.body);
}
