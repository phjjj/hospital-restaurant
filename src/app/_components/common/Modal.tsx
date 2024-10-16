import { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  setModal: (value: boolean) => void;
}
function Modal({ children, setModal }: Props) {
  const modalBackground = useRef<HTMLDivElement>(null);

  return ReactDOM.createPortal(
    <ModalStyle
      ref={modalBackground}
      onClick={(e) => {
        e.target === modalBackground.current && setModal(false);
      }}
      className="modal">
      {children}
    </ModalStyle>,
    document.getElementById("root")!
  );
}
const ModalStyle = styled.div`
  // 모달창
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export default Modal;
