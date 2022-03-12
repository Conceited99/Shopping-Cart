import  React from 'react'
import Modal from './Modal';
interface ModelwrapperProps {
 isModalVisible : boolean;
 onBackDropClick: () => void;
}
const ModalWrapper : React.FC<ModelwrapperProps> = ({onBackDropClick, isModalVisible}) => {
    if(!isModalVisible)
    {
        return null
    }
    return (<Modal onBackDropClick = {onBackDropClick} />);
}

export default ModalWrapper