import { useContext, useState } from 'react';
import { nCloneContext } from '../utils/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


function Votes({count}) {
const [votes, setVotes] = useState(0);

  return (
    <div className='col-1 d-flex flex-column justify-content-center align-items-center'>
        <div className='cursor arrowUp' onClick={() => setVotes(votes === 0 ? count + 1 : votes + 1)}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
        {votes === 0 ? count : votes}
        <div className='cursor arrowDown' onClick={() => setVotes(votes === 0 ? count - 1 : votes - 1)}>
            <FontAwesomeIcon icon={faArrowDown}/>
        </div>
    </div>
  )
}

export default Votes
