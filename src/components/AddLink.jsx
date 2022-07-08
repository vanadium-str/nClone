import React, {useContext} from 'react';
import { dateFormat } from '../utils/constants';
import { nCloneContext } from '../utils/context'

function AddLink() {

    const {setPage, setAddedImg, addedImg, setAddedTitle, addedTitle, setCurrentDate, arrayPosts, username} = useContext(nCloneContext);

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center my-4'>
                    <p className='logoSmall'>
                        nClone App
                    </p>
                </div>
                <div className='col-12 d-flex flex-column align-items-center'>
                    <label className='mb-2'>Please, write a title of the post</label>
                    <input className='inputTitle' placeholder='title' type='text' onChange={(event) => {
                        setAddedTitle(event.target.value);
                    }}/>
                </div>
                <div className='col-12 d-flex flex-column align-items-center'>
                    <label className='mt-5 mb-2'>Please, attach the photo (supported: .jpg/.jpeg/.png)</label>
                    <input type="file" accept=".jpg, .jpeg, .png" onChange={(event) => {
                        setAddedImg(window.URL.createObjectURL(event.target.files[0]));
                    }}/>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <img width = '500' src={addedImg}/>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='button me-5' onClick={() => {
                        if(addedTitle !== '' && addedImg !== ''){
                            setCurrentDate(dateFormat());
                            arrayPosts.unshift({
                                amountVotes: 0,
                                comments: [],
                                image: addedImg,
                                title: addedTitle,
                                username: username
                            })
                            setPage('allPosts');
                        }else{
                            alert('Please, write title and attach image');
                        }
                    }}>
                        Add
                    </button>
                    <button className='button buttonGray' onClick={() => {
                        confirm('Your data will not be saved. Are you sure?') ? setPage('allPosts') : '';
                    }}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddLink;