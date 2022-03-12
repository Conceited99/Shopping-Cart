import  React from 'react'
import ReactDOM from 'react-dom';

interface ModalProps{
onBackDropClick : () => void;
}

const Modal: React.FC<ModalProps> = ({onBackDropClick, children}) =>
{
    return ReactDOM.createPortal(<div onClick = {onBackDropClick}>
        <span> I'M A MODEL</span>
    </div>, document.getElementById('modal-root')!);
}
export default Modal