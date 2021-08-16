import React, { useContext } from "react";
import { SiteContext, useGlobalContext } from "../utils/Context";

const Modal = ({ current, children }) => {
  const dataFromContext = useGlobalContext();
  const { showModal, closeModal, currentModal } = dataFromContext;

  const close = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    showModal &&
    current === currentModal && (
      <div className="modal" onClick={close}>
        <div className="modal__body">{children}</div>
      </div>
    )
  );
};

export default Modal;

/* Ever hugged a lady or held a lady between your bossom as a man? Then you
        will surely feel the why of our love for big ladies. Big ladies have
        everything you can hold on to. From breasts, to thighs, to cheecks to
        butts, even down to the feets. You enjoy what you are seeing and
        holding. We do not sexualize women, but we cherish them and desire them
        as they do desire us. */
