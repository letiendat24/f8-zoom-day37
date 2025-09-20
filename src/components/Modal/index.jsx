import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

function Modal({
  isOpen,
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  closeTimeoutMS = 0,
  overlayClassName,
  className,
  bodyOpenClassName = "modal-open",
  htmlOpenClassName = "modal-open",
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  children,
}) {
  const [show, setShow] = useState(isOpen);      
  const [animating, setAnimating] = useState(false); 


  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => {
        onAfterOpen?.();
      }, closeTimeoutMS);
    } else if (show) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setShow(false);
        onAfterClose?.();
      }, closeTimeoutMS);
    }
  }, [isOpen]);

  // Esc key listener
  useEffect(() => {
    if (!isOpen || !shouldCloseOnEsc) return;
    const handleKey = (e) => {
      if (e.code === "Escape") {
        onRequestClose?.(e);
      }
    };
    document.addEventListener("keyup", handleKey);
    return () => document.removeEventListener("keyup", handleKey);
  }, [isOpen, shouldCloseOnEsc, onRequestClose]);

  // Thêm className cho body + html khi modal mở
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(bodyOpenClassName);
      document.documentElement.classList.add(htmlOpenClassName);
    }
    return () => {
      document.body.classList.remove(bodyOpenClassName);
      document.documentElement.classList.remove(htmlOpenClassName);
    };
  }, [isOpen, bodyOpenClassName, htmlOpenClassName]);

  if (!show) return null;

  return (
    <div
      className={`${styles.modal} ${animating ? styles.closing : ""}`}
    >
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${overlayClassName || ""}`}
        onClick={() => {
          if (shouldCloseOnOverlayClick) {
            onRequestClose?.();
          }
        }}
      />
      {/* Content */}
      <div className={`${styles.content} ${className || ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => onRequestClose?.()}
        >
          &times;
        </button>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,
  onRequestClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  overlayClassName: PropTypes.string,
  className: PropTypes.string,
  bodyOpenClassName: PropTypes.string,
  htmlOpenClassName: PropTypes.string,
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Modal;
