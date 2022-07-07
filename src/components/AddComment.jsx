import { useState, useContext } from 'react';
import { dateFormat } from '../utils/constants';
import { nCloneContext } from '../utils/context';

function AddComment() {
    const {setShowModal, setCurrentComDate,addedComment, setAddedComment} = useContext(nCloneContext);

  return (
    <div>
      <div className='d-flex flex-column align-items-center justify-content-center modalComment'>
          <label className='my-3'>Please, write your comment:</label>
          <textarea placeholder='your comment' rows='4' cols='50' onChange={(event) => {
            setAddedComment(event.target.value)
          }}/>
      </div>
      <div className='d-flex justify-content-around'>
        <button className='button me-5' onClick={() => {
            if(addedComment !== ''){
              setCurrentComDate(dateFormat());
              setShowModal(false);
            }else{
              alert('Please, write a comment');
            }
        }}>
          Add
        </button>
        <button className='button buttonGray' onClick={() => {
            confirm('Your comment will not be saved. Are you sure?') ? setShowModal(false) : ''
        }}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default AddComment;
