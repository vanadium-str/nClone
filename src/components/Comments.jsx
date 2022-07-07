import React, {useContext} from 'react';
import { nCloneContext } from '../utils/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { getRandomInt } from '../utils/constants';


function Comments() {

    const {page} = useContext(nCloneContext);

    return(
        <div className='row'>
            <div className='col-1 d-flex flex-column justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faArrowUp}/>
                {getRandomInt(1,350)}
                <FontAwesomeIcon icon={faArrowDown}/>
            </div>
            <div className='col-6'>
                <p className='mb-0'>Each nClone link and comment should have an “Add comment” button (next to the comments
                    count). Clicking that button will open a modal with a textarea for inserting the comment text.
                    The modal footer should have “Save”/”Cancel” buttons.</p>
                <p className='fontSmall mb-0 colorGray'>submitted on Jan 22, 2017 08:43 by <i>username</i></p>
                <div className='d-flex align-items-center colorGray'>
                    <p className='fw-bold fontSmall mb-0 me-5'>{getRandomInt(1,50)} comments</p>
                    <button className='fontSmall buttonAddComment'>Add comment</button>
                </div>
            </div>
        </div>
    )
}

export default Comments;