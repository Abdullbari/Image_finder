import React, { Component } from "react";

import { createPortal } from "react-dom";

import styles from "./Modal.module.css";
const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
  }

  onCloseModal = (e) => {
    if (e.target.classList.contains(styles.backdrop)) {
      this.props.closeModal();
    }
  };
  render() {
    return createPortal(
      <>
        <div className={styles.backdrop} onClick={this.onCloseModal}>
          <div className={styles.modalContent}>{this.props.children}</div>
        </div>
      </>,
      modalRoot
    );
  }
}
