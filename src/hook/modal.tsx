import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: none;
`;
const ModalContent = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  top: 5vh;
  max-height: 90vh;
  overflow-y: auto;
  left: 50%;
  z-index: 1040;
  min-width: 320px;
  transform: translateX(-50%);
`;
const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000000;
  opacity: 0.5;
`;

type useModalState = {
  onClose: () => void;
  onShow: (content: React.ReactNode) => void;
};

const Ctx = React.createContext({} as useModalState);

export const ModalProvider: React.FC = ({ children }) => {
  const [content, setContent] = React.useState<React.ReactNode | null>(null);
  const ModalRef = React.useRef(null);

  const onShow = React.useCallback((content: React.ReactNode): void => {
    setContent(content);
    if (ModalRef.current) {
      ModalRef.current.style.display = 'block';
    }
  }, []);

  const onClose = React.useCallback((): void => {
    if (ModalRef.current) {
      ModalRef.current.style.display = 'none';
    }
  }, []);

  return (
    <Ctx.Provider value={{ onClose, onShow }}>
      {children}
      <ModalWrapper ref={ModalRef}>
        <Backdrop onClick={onClose} />
        <ModalContent id="modal-content">{content}</ModalContent>
      </ModalWrapper>
    </Ctx.Provider>
  );
};

export const useModal = () => React.useContext(Ctx);
