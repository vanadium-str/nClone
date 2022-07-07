import React, {useContext} from 'react';
import { nCloneContext } from '../utils/context'
import { getRandomInt } from '../utils/constants';
import Comments from './Comments';
import AddComment from './AddComment';
import Modal from 'react-modal';
import AddCommentButton from './AddCommentButton';
import Votes from './Votes';

function CurrentPost() {

    const {setPage, addedPost, addedImg, username, addedTitle, showModal, setShowModal, currentDate} = useContext(nCloneContext);

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

                <div className='col-1'>
                    <Votes count={addedPost ? 0 : ''}/>
                </div>
                <div className='col-10'>
                    <p className='fontSmall m-0 colorGray'>
                            submitted on {addedPost ? currentDate : ''} by <b>{addedPost ? username : ''}</b>
                    </p>
                    <h4 className='m-0 cursor' onClick={() => setPage('currentPost')}>
                            Full moon rising over Mount Hood
                    </h4>
                    <div className='d-flex justify-content-start align-items-center my-3'>
                        <img width='500' src={addedPost ? addedImg : ''}/>
                    </div>
                    
                    <div className='d-flex align-items-center colorGray commentWidth'>
                        <p className='fw-bold fontSmall mb-0 me-5' onClick={() => 
                            showComments ? setShowComments(false) : setShowComments(true)
                        }>
                            {getRandomInt(1,50)} comments
                        </p>
                        <AddCommentButton/>
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