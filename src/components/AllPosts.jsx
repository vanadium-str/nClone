import { useState, useContext, useEffect } from 'react';
import { nCloneContext } from '../utils/context';
import Comments from './Comments';
import AddCommentButton from './AddCommentButton';
import Votes from './Votes';
import ModalWindow from './ModalWindow';
import { dateArray } from '../utils/constants';

function AllPosts() {
    const {setPage, currentDate, setPostId, arrayPosts, SetArrayPosts, setAddedImg, setAddedTitle, username} = useContext(nCloneContext);

    const [showComments, setShowComments] = useState(-1);
    
    console.log(arrayPosts);

  return (
    <div className='container my-2'>
        <div className='row'>
            <div className='col-12 my-3 d-flex justify-content-between align-items-center'>
                <p className='logoSmall'>
                    nClone App
                </p>
                <button className='button' onClick={() =>{
                    setPage('addLink');
                    setAddedImg('');
                    setAddedTitle('');
                    }}>
                    Add link
                </button>
            </div>

            {arrayPosts.map((item, key) => {
                return(
                    <div className='row my-2'>
                        <Votes count={item.amountVotes}/>

                        <div className='col-1 d-flex justify-content-center align-items-center'>
                            <img width='70' src={item.image}/>
                        </div>
                        <div className='col-10 mb-3'>
                            <h4 className='m-0 cursor' onClick={() => {
                                setPostId(key);
                                setPage('currentPost');
                            }}>
                                {item.title}
                            </h4>
                            <p className='fontSmall m-0 colorGray'>
                                submitted on {item.username === username ? currentDate : dateArray(item.date_time)} by <b>{item.username}</b>
                            </p>
                            <div className='d-flex align-items-center colorGray commentWidth'>
                                <p className='fw-bold fontSmall mb-0 me-5' onClick={() => {
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
                            :   <div className='slowDown collapsed'></div>
                        }
                    </div>
                )
            })}

            <ModalWindow/>
        </div>
    </div>
  )
}

export default AllPosts;


// let posts = {
    //     token: "2jYWMdVAEke_I3u7rqqbiA",
    //     data: {
    //         username: "personNickname",
    //         image: "personAvatar",
    //         title: "stringWords",
    //         amountVotes: "numberInt",
    //         date_time: "dateTime|UNIX",
    //         comments: [{
    //             comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi. Fusce finibus, sem nec tristique ornare, enim nisi mollis sem, eget viverra mauris nulla vel elit.",
    //             author: "username",
    //             amountVotes: 25,
    //             date_time: "Fri Sep 1 13:46:40 UTC 1972",
    //             amountComments: 0
    //         },
    //         {
    //             comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi. Fusce finibus, sem nec tristique ornare, enim nisi mollis sem, eget viverra mauris nulla vel elit.",
    //             author: "username",
    //             amountVotes: 25,
    //             date_time: "Fri Sep 1 13:46:40 UTC 1972",
    //             amountComments: 0
    //         },
    //         {
    //             comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi. Fusce finibus, sem nec tristique ornare, enim nisi mollis sem, eget viverra mauris nulla vel elit.",
    //             author: "username",
    //             amountVotes: 25,
    //             date_time: "Fri Sep 1 13:46:40 UTC 1972",
    //             amountComments: 0
    //         },
    //         {
    //             comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi. Fusce finibus, sem nec tristique ornare, enim nisi mollis sem, eget viverra mauris nulla vel elit.",
    //             author: "username",
    //             amountVotes: 25,
    //             date_time: "Fri Sep 1 13:46:40 UTC 1972",
    //             amountComments: 0
    //         },
    //         {
    //             comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a suscipit augue. Nunc et imperdiet mi. Fusce finibus, sem nec tristique ornare, enim nisi mollis sem, eget viverra mauris nulla vel elit.",
    //             author: "username",
    //             amountVotes: 25,
    //             date_time: "Fri Sep 1 13:46:40 UTC 1972",
    //             amountComments: 0
    //         }
    //     ],
    //         _repeat: 10
    //       }
    // }

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
    //             SetArrayPosts(data);
    //             console.log(data);
    //         });

    // }, []);
