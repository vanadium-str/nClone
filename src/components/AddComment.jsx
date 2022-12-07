import { useContext } from 'react';
import { dateArray } from '../utils/constants';
import { nCloneContext } from '../utils/context';

function AddComment() {
    const {setShowModal, arrayPosts ,addedComment, setAddedComment, username, setCurrentDate, postId} = useContext(nCloneContext);

  return (
    <div>
      <div className='d-flex flex-column align-items-center justify-content-center modalComment'>
          <label className='my-3' data-cy='write-comment'>
            Please, write your comment:
          </label>
          <textarea placeholder='your comment' rows='4' cols='50' data-cy='add-comment-textarea' onChange={(event) => {
            setAddedComment(event.target.value)
          }}/>
      </div>
      <div className='d-flex justify-content-around'>
        <button className='button me-5' data-cy='add-comment-button' onClick={() => {
            if(addedComment !== ''){
              setCurrentDate(dateArray(''));
            //   arrayPosts[postId].comments.unshift({
            //     amountVotes: 0,
            //     amountComments: 0,
            //     comment: addedComment,
            //     author: username
            // })
              fetch('/addComment',{
                  method: 'POST',
                  body: JSON.stringify({
                      amountVotes: 0,
                      amountComments: 0,
                      comment: addedComment,
                      author: username,
                      postId: postId
                  }),
                  headers: {
                      'Content-Type': 'application/json'
                  }
              })
              setShowModal(false);
            }else{
              alert('Please, write a comment');
            }
        }}>
          Add
        </button>
        <button className='button buttonGray' data-cy='back-from-comment-button' onClick={() => {
            confirm('Your comment will not be saved. Are you sure?') ? setShowModal(false) : ''
        }}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default AddComment;
