import { useState, useCallback } from 'react';

export const useModal = <T = unknown>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const openModal = useCallback((modalData?: T) => {
    setData(modalData || null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setData(null);
  }, []);

  return {
    isOpen,
    data,
    openModal,
    closeModal,
  };
};