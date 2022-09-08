import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import { addLink, allPosts, currentPost } from '../utils/constants';
import { nCloneContext } from '../utils/context'
import AddLink from './AddLink';
import AllPosts from './AllPosts';
import CurrentPost from './CurrentPost';
import StartPage from './StartPage';

function SwitchPage() {

    return(
        <Routes>
            <Route path={`/${allPosts}`} element={<AllPosts/>} exact/>
            <Route path={`/${addLink}`} element={<AddLink/>} exact/>
            <Route path={`/${currentPost}`} element={<CurrentPost/>} exact/>
            <Route path={`/`} element={<StartPage/>} exact/>
        </Routes>
    );
}

export default SwitchPage;