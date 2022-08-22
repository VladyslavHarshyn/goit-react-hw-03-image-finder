import React, { Component } from 'react';
import s from './Modal.module.css';

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // handleKeyDown = event => {
  //   event.code === 'Escape' && this.props.onClose();
  // };

  // handleOverlayClick = event => {
  //   event.currentTarget === event.target && this.props.onClose();
  // };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div className={s.overlay} onClick={this.handleModalClick}>
        <div className={s.modal}>
          <img className={s.img} src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default ModalWindow;
