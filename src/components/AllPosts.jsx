import { useState, useContext, useEffect } from 'react';
import { nCloneContext } from '../utils/context';
import { getRandomInt } from '../utils/constants';
import Comments from './Comments';
import AddComment from './AddComment';
import Modal from 'react-modal';
import AddCommentButton from './AddCommentButton';
import Votes from './Votes';
import AddedSection from './AddedSection';

function AllPosts() {
    const {setPage, showComments, setShowComments, showModal, setShowModal, addedTitle, setPostId} = useContext(nCloneContext);
    
    let posts = {
        token: "J0O8AvJwCW7C9EwGIgF2Fw",
        data: {
            username: "personNickname",
            image: "personAvatar",
            title: "stringWords",
            amountVotes: "numberInt",
            date_time: "dateTime|UNIX",
            _repeat: 20
          }
    }
    let comments = {
        token: "J0O8AvJwCW7C9EwGIgF2Fw",
        data: {
            comment: "stringShort",
            author: "personNickname",
            _repeat: 20
           }
    }

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

    const hideModal = () => {
        setShowModal(false);
    };

    // useEffect(() => {
    //     fetch('https://app.fakejson.com/q', {
    //             method: 'POST',
    //             body: JSON.stringify(posts),
    //             headers: {
    //               'Content-Type': 'application/json'
    //             }
    //           })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         }
    //     );
    // }, []);

  return (
    <div className='container my-2'>
        <div className='row'>
            <div className='col-12 my-3 d-flex justify-content-between align-items-center'>
                <p className='logoSmall'>
                    nClone App
                </p>
                <button className='button' onClick={() => setPage('addLink')}>
                    Add link
                </button>
            </div>

            {addedTitle ? <AddedSection/> : ''}

            <Votes count={225}/>

            <div className='col-1 d-flex justify-content-center align-items-center'>
                <img width='70' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunset-quotes-21-1586531574.jpg'/>
            </div>
            <div className='col-10 mb-3'>
                <h4 className='m-0 cursor' onClick={() => {
                    // setPostId();
                    setPage('currentPost');
                }}>
                    Full moon rising over Mount Hood
                </h4>
                <p className='fontSmall m-0 colorGray'>
                    submitted on Jan 22, 2017 08:43 by <b>Username</b>
                </p>
                <div className='d-flex align-items-center colorGray commentWidth'>
                    <p className='fw-bold fontSmall mb-0 me-5' onClick={() => 
                        showComments ? setShowComments(false) : setShowComments(true)
                    }>
                        {getRandomInt(1,50)} comments
                    </p>
                    <AddCommentButton/>
                </div>
            </div>

            {showComments? 
                <div className='offset-2 my-2'>
                    <Comments/>
                </div>
            : ''}


            <Votes count={230}/>
            
            <div className='col-1 d-flex justify-content-center align-items-center'>
                <img width='70' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunset-quotes-21-1586531574.jpg'/>
            </div>
            <div className='col-10 mb-3'>
                <h4 className='m-0 cursor' onClick={() => setPage('currentPost')}>
                    Full moon rising over Mount Hood
                </h4>
                <p className='fontSmall m-0 colorGray'>
                    submitted on Jan 22, 2017 08:43 by <b>Username</b>
                </p>
                <div className='d-flex align-items-center colorGray'>
                    <p className='fw-bold fontSmall mb-0 me-5' onClick={() => 
                        showComments ? setShowComments(false) : setShowComments(true)
                    }>
                        {getRandomInt(1,50)} comments
                    </p>
                    <AddCommentButton/>
                </div>
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

export default AllPosts;
