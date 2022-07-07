import { useState } from 'react';
import './App.css';
import SwitchPage from './components/SwitchPage';
import { nCloneContext } from './utils/context';


function App() {
  const [page, setPage] = useState('');
  const [username, setUsername] = useState('');
  const [addedImg, setAddedImg] = useState('');
  const [addedTitle, setAddedTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [addedComment, setAddedComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [postId, setPostId] = useState('');
  const [addedPost, setAddedPost] = useState(false);

  return (
    <div className=''>
      <nCloneContext.Provider value = {
        { page, setPage, username, setUsername, addedImg, setAddedImg, addedTitle, setAddedTitle, showModal, setShowModal,
          addedComment, setAddedComment, showComments, setShowComments, currentDate, setCurrentDate, postId, setPostId,
          addedPost, setAddedPost }
      }>
        <SwitchPage/>
      </nCloneContext.Provider>
    </div>
  )
}

export default App
