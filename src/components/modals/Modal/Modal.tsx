import Dialog from "@mui/material/Dialog";
import { useDispatch } from "react-redux";
import { setActiveModal } from "../../../features/general/generalSlice";
import { IModal } from "../modal.models";

export default function Modal(props: IModal) {
  const { onClose, open, children, unableClosing } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    onClose && onClose();
    !unableClosing && dispatch(setActiveModal(null));
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {children}
    </Dialog>
  );
}
