import { IModal } from "../modal.models";
import Modal from "../Modal/Modal";
import CircularProgress from "@mui/material/CircularProgress";
export interface IErrorModal extends IModal {}

const LoaderModal = (props: IErrorModal) => {
  return (
    <Modal {...props}>
      <div
        style={{
          height: "500px",
          width: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            top: 70,
            position: "absolute",
          }}
        >
          loading
        </h1>
        <CircularProgress size={100} />
      </div>
    </Modal>
  );
};

export default LoaderModal;
