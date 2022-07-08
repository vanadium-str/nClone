import { useContext } from 'react';
import { nCloneContext } from '../utils/context';


function AddCommentButton({id}) {
const {setShowModal, setPostId} = useContext(nCloneContext);

  return (
    <button className='fontSmall buttonAddComment' onClick={() => {
        setPostId(id);
        setShowModal(true);
    }}>
        Add comment
    </button>
  )
}

export default AddCommentButton
