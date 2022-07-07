import { useState, useContext } from 'react';
import { nCloneContext } from '../utils/context';

function StartPage() {
    const {setPage, username, setUsername} = useContext(nCloneContext);

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
        <p className='logo'>
          nClone App
        </p>
        <label className='m-2 fontSmall'>
          Please, write your username:
        </label>
        <input className='inputUsername mb-4' placeholder='username' type='text'
              onChange={(e) => setUsername(e.target.value.trim())}/>
        <button className='button' onClick={() => {
          username !== '' ? setPage('allPosts') : alert('Please, write your username')
        }}>
          Sign In
        </button>
    </div>
  )
}

export default StartPage;
