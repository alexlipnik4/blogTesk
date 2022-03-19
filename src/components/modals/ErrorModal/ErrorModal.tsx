import { IModal } from "../modal.models";
import Modal from "../Modal/Modal";
export interface IErrorModal extends IModal {}

const ErrorModal = (props: IErrorModal) => {
  return (
    <Modal {...props}>
      <div
        style={{
          height: 100,
          width: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        error
      </div>
    </Modal>
  );
};

export default ErrorModal;
