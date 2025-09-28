import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Modal.module.scss";

const Modal = forwardRef(
  (
    {
      isOpen: _isOpen = false,
      onAfterOpen,
      onAfterClose,
      onRequestClose,
      closeTimeoutMS = 300,
      overlayClassName,
      className,
      bodyOpenClassName = "modal-open",
      htmlOpenClassName = "modal-open",
      shouldCloseOnOverlayClick = true,
      shouldCloseOnEsc = true,
      children,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(_isOpen);

    useEffect(() => {
      setIsOpen(_isOpen);
    }, [_isOpen]);

    useImperativeHandle(ref, () => ({
      open() {
        setIsOpen(true);
      },
      close() {
        setIsOpen(false);
      },
      toggle() {
        setIsOpen((prev) => !prev);
      },
    }));

    // Đóng modal
    const handleRequestClose = () => {
      if (closeTimeoutMS > 0) {
        setTimeout(() => {
          onRequestClose?.();
          setIsOpen(false);
          onAfterClose?.();
        }, closeTimeoutMS);
      } else {
        onRequestClose?.();
        setIsOpen(false);
        onAfterClose?.();
      }
    };

    // Trigger onAfterOpen khi modal mở
    useEffect(() => {
      if (isOpen) {
        onAfterOpen?.();
      }
    }, [isOpen, onAfterOpen]);

    // ESC để đóng
    useEffect(() => {
      if (!shouldCloseOnEsc) return;

      const handle = (e) => {
        if (e.code === "Escape") {
          handleRequestClose();
        }
      };

      if (isOpen) {
        document.addEventListener("keyup", handle);
      }

      return () => {
        document.removeEventListener("keyup", handle);
      };
    }, [isOpen, shouldCloseOnEsc]);

    // Thêm class vào body & html khi mở modal
    useEffect(() => {
      if (isOpen) {
        if (bodyOpenClassName) document.body.classList.add(bodyOpenClassName);
        if (htmlOpenClassName) document.documentElement.classList.add(htmlOpenClassName);
      }

      return () => {
        if (bodyOpenClassName) document.body.classList.remove(bodyOpenClassName);
        if (htmlOpenClassName) document.documentElement.classList.remove(htmlOpenClassName);
      };
    }, [isOpen, bodyOpenClassName, htmlOpenClassName]);

    if (!isOpen) return null;

    return (
      <div className={styles.modal}>
        <div className={clsx(styles.content, className)}>
          <button className={styles.closeBtn} onClick={handleRequestClose}>
            &times;
          </button>
          <div className={styles.body}>{children}</div>
        </div>
        <div
          className={clsx(styles.overlay, overlayClassName)}
          onClick={() => {
            if (shouldCloseOnOverlayClick) handleRequestClose();
          }}
        />
      </div>
    );
  }
);

Modal.displayName = "Modal";

Modal.propTypes = {
  isOpen: PropTypes.bool,
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
