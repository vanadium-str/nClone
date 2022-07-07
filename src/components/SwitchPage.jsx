import React, {useContext} from 'react';
import { nCloneContext } from '../utils/context'
import AddLink from './AddLink';
import AllPosts from './AllPosts';
import CurrentPost from './CurrentPost';
import StartPage from './StartPage';

function SwitchPage() {

    const {page} = useContext(nCloneContext);

    switch (page) {
        case 'allPosts':
            return(
                <AllPosts/>
            );
        case 'addLink':
            return(
                <AddLink/>
            );
        case 'currentPost':
            return(
                <CurrentPost/>
            );
        default:
            return (
                <StartPage/>
            );
    }
}

export default SwitchPage;