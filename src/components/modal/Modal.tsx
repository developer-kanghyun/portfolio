import React, { type ReactNode, useEffect } from 'react';
import {
  StyledModalBackdrop,
  StyledModalContent,
  StyledModalCloseButton,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // 모달이 열리면 body 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫히면 body 스크롤 복원
      document.body.style.overflow = 'unset';
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <StyledModalBackdrop onClick={onClose}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        <StyledModalCloseButton onClick={onClose}>
          &times;
        </StyledModalCloseButton>
        {children}
      </StyledModalContent>
    </StyledModalBackdrop>
  );
};

export default Modal;
