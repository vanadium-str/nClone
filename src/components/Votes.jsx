import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


function Votes({count}) {
const [votes, setVotes] = useState(0);

  return (
    <div className='col-1 d-flex flex-column justify-content-center align-items-center'>
        <div className='cursor arrowUp' data-cy='increase-vote' onClick={() => setVotes(votes === 0 ? count + 1 : votes + 1)}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
        <div data-cy='votes'>
          {votes === 0 ? count : votes}          
        </div>
        <div className='cursor arrowDown' data-cy='decrease-vote' onClick={() => setVotes(votes === 0 ? count - 1 : votes - 1)}>
            <FontAwesomeIcon icon={faArrowDown}/>
        </div>
    </div>
  )
}

export default Votes
