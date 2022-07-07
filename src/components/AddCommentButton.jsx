import { useContext } from 'react';
import { nCloneContext } from '../utils/context';


function AddCommentButton() {
const {setShowModal} = useContext(nCloneContext);

  return (
    <button className='fontSmall buttonAddComment' onClick={() => {
        setShowModal(true);
    }}>
        Add comment
    </button>
  )
}

export default AddCommentButton
