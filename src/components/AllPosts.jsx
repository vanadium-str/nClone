import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { nCloneContext } from '../utils/context';
import Comments from './Comments';
import AddCommentButton from './AddCommentButton';
import Votes from './Votes';
import ModalWindow from './ModalWindow';
import { addLink, currentPost, dateArray } from '../utils/constants';

function AllPosts() {

    const {currentDate, setPostId, arrayPosts, setAddedImg, setAddedTitle, username, setArrayPosts} = useContext(nCloneContext);

    const [showComments, setShowComments] = useState(-1);

    let navigate = useNavigate();

    // useEffect(() => {
    //     fetch('https://my-json-server.typicode.com/vanadium-str/fakeJSON/data')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setArrayPosts(data);
    //         }
    //     );
    // }, []);

    return (
        <div className='container my-2'>
            <div className='row'>
                <div className='col-12 my-3 d-flex justify-content-between align-items-center'>
                    <p className='logoSmall' data-cy='logo'>
                        nClone App
                    </p>
                    <button className='button' data-cy='button-add-link' onClick={() =>{
                        navigate(`/${addLink}`);
                        setAddedImg('');
                        setAddedTitle('');
                        }}>
                        Add link
                    </button>
                </div>

                {arrayPosts.length ? arrayPosts.map((item, key) => {
                    return(
                        <div className='row my-2' data-cy='title-row'>
                            <Votes count={item.amountVotes}/>

                            <div className='col-1 d-flex justify-content-center align-items-center'>
                                <img width='70' src={item.image}/>
                            </div>
                            <div className='col-10 mb-3'>
                                <h4 className='m-0 cursor' data-cy='title-post' onClick={() => {
                                    setPostId(key);
                                    navigate(`/${currentPost}`);
                                }}>
                                    {item.title}
                                </h4>
                                <p className='fontSmall m-0 colorGray'>
                                    submitted on {item.username === username ? currentDate : dateArray(item.date_time)} by <b>{item.username}</b>
                                </p>
                                <div className='d-flex align-items-center colorGray commentWidth'>
                                    <p className='fw-bold fontSmall mb-0 me-5' data-cy='comments' onClick={() => {
                                        if(item.comments.length){
                                            setPostId(key);
                                            showComments === -1 ? setShowComments(key) : setShowComments(-1)
                                        }
                                    }}>
                                        {item.comments.length} comments
                                    </p>
                                    <AddCommentButton id={key}/>
                                </div>
                            </div>

                            {showComments === key ? 
                                <div className='offset-2 my-2 commentsBlock slowDown'>
                                    <Comments id={key}/>
                                </div>
                                : <div className='slowDown collapsed'></div>
                            }
                        </div>
                    )
                })
                : <div className='d-flex justify-center fw-bold col-12'data-cy='no-posts'> 
                    <p>There is no posts yet</p>
                </div>
                }

                <ModalWindow/>
            </div>
        </div>
    )
}

export default AllPosts;
