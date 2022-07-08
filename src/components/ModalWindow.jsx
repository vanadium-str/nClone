import React, {useContext} from 'react';
import { nCloneContext } from '../utils/context'
import AddComment from './AddComment';
import Modal from 'react-modal';

function ModalWindow({}) {

    const {showModal, setShowModal} = useContext(nCloneContext);

    const hideModal = () => {
        setShowModal(false);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return(
        <Modal isOpen={showModal} closeTimeoutMS={150} onRequestClose={hideModal} style={customStyles}>
            <AddComment/>
            <span className='close' onClick={() => {                        
                if(confirm('Your comment will not be saved. Are you sure?')){
                    setShowModal(false);
                    document.body.style.overflow = 'unset';
                }
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                <path d="M14 .7l-.7-.7L7 6.3.7 0 0 .7 6.3 7 0 13.3l.7.7L7 7.7l6.3 6.3.7-.7L7.7 7z"/>
            </svg>
            </span>
        </Modal>
    )
}

export default ModalWindow;