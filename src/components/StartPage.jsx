import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { allPosts } from '../utils/constants';
import { nCloneContext } from '../utils/context';

function StartPage() {

    const {username, setUsername} = useContext(nCloneContext);

    let navigate = useNavigate();

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
          username !== '' ? navigate(`/${allPosts}`) : alert('Please, write your username')
        }}>
          Sign In
        </button>
    </div>
  )
}

export default StartPage;
