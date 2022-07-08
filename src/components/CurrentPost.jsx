import React, {useContext} from 'react';
import { nCloneContext } from '../utils/context'
import Comments from './Comments';
import AddCommentButton from './AddCommentButton';
import Votes from './Votes';
import ModalWindow from './ModalWindow';

function CurrentPost() {

    const {setPage, addedPost, arrayPosts, setShowModal, currentDate, postId} = useContext(nCloneContext);

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
                    <Votes count={arrayPosts[postId].amountVotes}/>
                </div>
                <div className='col-10'>
                    <p className='fontSmall m-0 colorGray'>
                            submitted on {addedPost ? currentDate : ''} by <b>{arrayPosts[postId].username}</b>
                    </p>
                    <h4 className='m-0 cursor' onClick={() => setPage('currentPost')}>
                            {arrayPosts[postId].title}
                    </h4>
                    <div className='d-flex justify-content-start align-items-center my-3'>
                        <img width='500' src={arrayPosts[postId].image}/>
                    </div>
                    
                    <div className='d-flex align-items-center colorGray commentWidth'>
                        <p className='fw-bold fontSmall mb-0 me-5' onClick={() => 
                            showComments ? setShowComments(false) : setShowComments(true)
                        }>
                            {arrayPosts[postId].comments} comments
                        </p>
                        <AddCommentButton/>
                    </div>
                </div>


                <div className='offset-2 my-2'>
                    <Comments/>
                </div>

                <ModalWindow/>
            </div>
        </div>
    )
}

export default CurrentPost;