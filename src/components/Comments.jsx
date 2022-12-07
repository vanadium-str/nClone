import React, {useContext} from 'react';
import { nCloneContext } from '../utils/context'
import Votes from './Votes';
import { dateArray } from '../utils/constants';
import AddCommentButton from './AddCommentButton';


function Comments() {

    const {arrayPosts, currentDate, postId, username} = useContext(nCloneContext);

    return(
        <div className='row'>
            <div className='col-12 row mb-3'>
                {arrayPosts[postId].comments.map((item, key) => {
                    return(
                        <div className='mb-2 row' key={key}>

                            <Votes count={item.amountVotes}/>

                            <div className='col-6'>
                                <p className='mb-0' data-cy='comment-title'>
                                    {item.comment}
                                </p>
                                <p className='fontSmall mb-0 colorGray' data-cy='comment-username'>
                                    submitted on {arrayPosts[postId].username === username ? currentDate : dateArray(item.date_time)} by <b>{item.author}</b>
                                </p>
                                <div className='d-flex align-items-center colorGray'>
                                    <p className='fw-bold fontSmall mb-0 me-5'>{item.amountComments} comments</p>
                                    <AddCommentButton id={postId}/>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Comments;