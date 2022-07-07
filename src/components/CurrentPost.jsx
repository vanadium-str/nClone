import React, {useContext} from 'react';
import { nCloneContext } from '../utils/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { getRandomInt } from '../utils/constants';
import Comments from './Comments';
import AddComment from './AddComment';
import Modal from 'react-modal';

function CurrentPost() {

    const {setPage, username, setUsername, showModal, setShowModal} = useContext(nCloneContext);

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
        <div className='container my-2'>
            <div className='row'>
                <div className='col-12 my-3 d-flex justify-content-between align-items-center'>
                    <p className='logoSmall'>
                        nClone App
                    </p>
                    <button className='button buttonGray' onClick={() => setPage('allPosts')}>
                        Back
                    </button>
                </div>
                <div className='col-1 d-flex flex-column justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faArrowUp}/>
                223
                <FontAwesomeIcon icon={faArrowDown}/>
                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <img width='70' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunset-quotes-21-1586531574.jpg'/>
                </div>
                <div className='col-9'>
                    <h4 className='m-0'>Full moon rising over Mount Hood</h4>
                    <p className='fontSmall m-0 colorGray'>submitted on Jan 22, 2017 08:43 by Username</p>
                    <div className='d-flex align-items-center colorGray'>
                        <p className='fw-bold fontSmall mb-0 me-5'>{getRandomInt(1,50)} comments</p>
                        <button className='fontSmall buttonAddComment' onClick={() => {
                            setShowModal(true);
                            console.log(showModal)
                        }}>
                            Add comment
                        </button>
                    </div>
                </div>

                <div className='offset-2 my-2'>
                    <Comments/>
                </div>

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
            </div>
        </div>
    )
}

export default CurrentPost;