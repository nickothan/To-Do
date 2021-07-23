import { ModalContainer, CloseModal, ModalContent } from "./styles";

const Modal = ({ children, isOpen, handleClose }) => {
    return (
        <ModalContainer isOpen={isOpen}>
            <ModalContent>
                <CloseModal onClick={handleClose}>&times;</CloseModal>
                {children}
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
