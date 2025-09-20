import { useState } from "react";
import Modal from "../../components/Modal";
import styles from "./ModalDemo.module.scss";

function ModalDemo() {
  // State cho từng modal
  const [openBasic, setOpenBasic] = useState(false);
  const [openAnimation, setOpenAnimation] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [openEsc, setOpenEsc] = useState(false);
  const [openCustom, setOpenCustom] = useState(false);
  const [openCallbacks, setOpenCallbacks] = useState(false);

  return (
    <div className={styles.modalDemo}>
      <h1>Modal Demo Page</h1>

      <section className={styles.sectionModal}>
        <h2>1. Basic Modal</h2>
        <button onClick={() => setOpenBasic(true)}>Mở Modal</button>
        <Modal
          isOpen={openBasic}
          onRequestClose={() => setOpenBasic(false)}
        >
          <h3>Basic Modal</h3>
          <p>Đây là modal cơ bản.</p>
          <button onClick={() => setOpenBasic(false)}>Đóng</button>
        </Modal>
      </section>

      <section>
        <h2>2. Modal với Animation</h2>
        <button onClick={() => setOpenAnimation(true)}>Mở Modal</button>
        <Modal
          isOpen={openAnimation}
          onRequestClose={() => setOpenAnimation(false)}
          closeTimeoutMS={300}
        >
          <h3>Modal có Animation</h3>
          <p>Modal này có animation đóng/mở (closeTimeoutMS=300).</p>
          <button onClick={() => setOpenAnimation(false)}>Đóng</button>
        </Modal>
      </section>

      <section>
        <h2>3. Modal không đóng khi click overlay</h2>
        <button onClick={() => setOpenOverlay(true)}>Mở Modal</button>
        <Modal
          isOpen={openOverlay}
          onRequestClose={() => setOpenOverlay(false)}
          shouldCloseOnOverlayClick={false}
        >
          <h3>Overlay Modal</h3>
          <p>Click overlay sẽ KHÔNG đóng modal.</p>
          <button onClick={() => setOpenOverlay(false)}>Đóng</button>
        </Modal>
      </section>

      <section>
        <h2>4. Modal không đóng khi nhấn Esc</h2>
        <button onClick={() => setOpenEsc(true)}>Mở Modal</button>
        <Modal
          isOpen={openEsc}
          onRequestClose={() => setOpenEsc(false)}
          shouldCloseOnEsc={false}
        >
          <h3>Esc Modal</h3>
          <p>Nhấn phím Esc sẽ KHÔNG đóng modal.</p>
          <button onClick={() => setOpenEsc(false)}>Đóng</button>
        </Modal>
      </section>

      <section>
        <h2>5. Modal với custom className</h2>
        <button onClick={() => setOpenCustom(true)}>Mở Modal</button>
        <Modal
          isOpen={openCustom}
          onRequestClose={() => setOpenCustom(false)}
          overlayClassName={styles.myOverlay}
          className={styles.myModal}
        >
          <h3>Custom Modal</h3>
          <p>Modal này được custom CSS với className riêng.</p>
          <button onClick={() => setOpenCustom(false)}>Đóng</button>
        </Modal>
      </section>

      <section>
        <h2>6. Modal với callbacks</h2>
        <button onClick={() => setOpenCallbacks(true)}>Mở Modal</button>
        <Modal
          isOpen={openCallbacks}
          onRequestClose={() => setOpenCallbacks(false)}
          onAfterOpen={() => console.log("Modal đã mở")}
          onAfterClose={() => console.log("Modal đã đóng")}
          closeTimeoutMS={300}
        >
          <h3>Callback Modal</h3>
          <p>Xem console log khi modal mở/đóng.</p>
          <button onClick={() => setOpenCallbacks(false)}>Đóng</button>
        </Modal>
      </section>
    </div>
  );
}

export default ModalDemo;
