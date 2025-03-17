import { ReactNode, ComponentType, useState, FC } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

interface WithModalProps {
  openModal: (content: ReactNode) => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    throw new Error("No modal-root element found in the DOM");
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-4 w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

const withModal = <P extends object>(
  WrappedComponent: ComponentType<P & WithModalProps>,
): FC<P> => {
  return function WithModal(props: P) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const openModal = (content: ReactNode) => {
      setModalContent(content);
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
      setModalContent(null);
    };

    return (
      <>
        <WrappedComponent {...props} openModal={openModal} />
        {isModalOpen && <Modal onClose={closeModal}>{modalContent}</Modal>}
      </>
    );
  };
};

export default withModal;
