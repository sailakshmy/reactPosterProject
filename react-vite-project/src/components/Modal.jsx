import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
const navigate = useNavigate();
  const onClickClose = () =>{
    navigate('..')
  }
  
  return (
    <>
      <div className={classes.backdrop} onClick={onClickClose}/>
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
};

export default Modal;
