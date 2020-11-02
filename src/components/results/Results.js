import React from 'react';
import './Results.scss';

import Profile from './profile/Profile';
import Followers from './followers/Followers';

export default function Results(props) {

    return(
        <div className='results'>
            <Profile store={props.store}/>
            <Followers store={props.store} />
        </div>
    )
}