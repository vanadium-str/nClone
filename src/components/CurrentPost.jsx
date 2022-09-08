import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { nCloneContext } from '../utils/context'
import Comments from './Comments';
import AddCommentButton from './AddCommentButton';
import Votes from './Votes';
import ModalWindow from './ModalWindow';
import { allPosts } from '../utils/constants';

function CurrentPost() {

    const {addedPost, arrayPosts, currentDate, postId} = useContext(nCloneContext);

    let navigate = useNavigate();

    return(
        <div className='container my-2'>
            <div className='row'>
                <div className='col-12 my-3 d-flex justify-content-between align-items-center'>
                    <p className='logoSmall'>
                        nClone App
                    </p>
                    <button className='button buttonGray' data-cy='back-from-current-title' onClick={() => navigate(`/${allPosts}`)}>
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
                    <h4 className='m-0' data-cy='current-title-post'>
                            {arrayPosts[postId].title}
                    </h4>
                    <div className='d-flex justify-content-start align-items-center my-3'>
                        <img width='500' src={arrayPosts[postId].image}/>
                    </div>
                    
                    <div className='d-flex align-items-center colorGray commentWidth'>
                        <p className='fw-bold fontSmall mb-0 me-5' onClick={() => 
                            showComments ? setShowComments(false) : setShowComments(true)
                        }>
                            {arrayPosts[postId].comments.length} comments
                        </p>
                        <AddCommentButton id={postId}/>
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