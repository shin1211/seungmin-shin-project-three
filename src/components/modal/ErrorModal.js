import ReactDOM from 'react-dom';
import styles from './ErrorModal.module.css';

const ModalText = ({ title, message, onErrorHandler }) => {
    return (
        <div className={styles['modal-background']} onClick={onErrorHandler}>
            <div className={styles['error-modal-container']}>
                <header>
                    <h2>{title}</h2>
                </header>
                <div>
                    <p>{message}</p>
                </div>
                <footer>
                    <button onClick={onErrorHandler}>Close</button>
                </footer>
            </div>
        </div>
    )
}
const ErrorModal = ({ title, message, onErrorHandler }) => {
    return <>
        {ReactDOM.createPortal(<ModalText
            title={title}
            message={message}
            onErrorHandler={onErrorHandler}
        />, document.getElementById('overlay-root'))}
    </>
};

export default ErrorModal;