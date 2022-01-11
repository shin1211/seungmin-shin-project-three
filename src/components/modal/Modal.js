import { useState } from 'react';
import ModalStyle from './ModalStyle.module.css'

const Modal = ({ setOpenModal, addFullList, setErrorState }) => {
    const [userComment, setUserComment] = useState('');

    const closeModal = (e) => {
        e.preventDefault();
        if (userComment.trim().length === 0) {
            setErrorState({
                title: 'Invaild input',
                message: "Please enter the comments!"
            });
            return;
        } else {

            addFullList(userComment);
            setOpenModal(false);
            setUserComment('');
        }
    }
    return (
        <div className={ModalStyle['modal-background']}>
            <div className={ModalStyle['modal-container']}>
                <h3>Please enter your comments!</h3>
                <form className={ModalStyle['modal-form']} onSubmit={e => closeModal(e)}>
                    <label htmlFor="userComment" className="sr-only">Please enter the comments!</label>
                    <textarea id="userComment" className={ModalStyle['modal-textarea']} type="text" value={userComment} onChange={e => setUserComment(e.target.value)} />
                    <button className={ModalStyle['submit-btn']}>Submit</button>
                </form>
                <button className={ModalStyle['close-btn']} onClick={() => setOpenModal(false)}>X</button>
            </div>
        </div>
    )

}


export default Modal;