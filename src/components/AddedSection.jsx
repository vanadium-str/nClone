import { useState, useContext, useEffect } from 'react';
import { nCloneContext } from '../utils/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { getRandomInt } from '../utils/constants';
import Comments from './Comments';
import AddComment from './AddComment';
import Modal from 'react-modal';
import AddCommentButton from './AddCommentButton';
import Votes from './Votes';

function AddedSection() {
    const {setPage, showComments, setShowComments, currentDate, addedImg, addedTitle, username, setAddedPost} = useContext(nCloneContext);

    return (
        <div className='col-12 row'>
            <Votes count={0}/>

            <div className='col-1 d-flex justify-content-center align-items-center'>
                <img width='70' src={addedImg}/>
            </div>
            <div className='col-10 mb-3'>
                <h4 className='m-0 cursor' onClick={() => {
                    setAddedPost(true);
                    setPage('currentPost');
                }}>
                    {addedTitle}
                </h4>
                <p className='fontSmall m-0 colorGray'>
                    submitted on {currentDate} by <b>{username}</b>
                </p>
                <div className='d-flex align-items-center colorGray'>
                    <p className='fw-bold fontSmall mb-0 me-5 commentWidth' onClick={() => 
                        showComments ? setShowComments(false) : setShowComments(true)
                    }>
                        0 comments
                    </p>
                    <AddCommentButton/>
                </div>
            </div>
        </div>
  )
}

export default AddedSection;
