import { useState } from 'react';
import './App.css';
import SwitchPage from './components/SwitchPage';
import { data } from './utils/constants';
import { nCloneContext } from './utils/context';


function App() {
  const [username, setUsername] = useState('');
  const [addedImg, setAddedImg] = useState('');
  const [addedTitle, setAddedTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [addedComment, setAddedComment] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [postId, setPostId] = useState('');
  const [addedPost, setAddedPost] = useState(false);
  const [arrayPosts, setArrayPosts] = useState([]);

  return (
    <div className=''>
      <nCloneContext.Provider value = {
        { username, setUsername, addedImg, setAddedImg, addedTitle, setAddedTitle, showModal, setShowModal,
          addedComment, setAddedComment, currentDate, setCurrentDate, postId, setPostId, addedPost, setAddedPost, arrayPosts, setArrayPosts }
      }>
        <SwitchPage/>
      </nCloneContext.Provider>
    </div>
  )
}

export default App;
