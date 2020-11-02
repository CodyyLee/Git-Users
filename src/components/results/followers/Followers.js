import React from 'react';
import './Followers.scss';

export default function Followers(props) {
    
    return(
        <div className='followers'>
            {props.store.followers ?
            <>
                <h2 className='follow-title'>Followers</h2>
                <hr/>
            </>
            : null}

        </div>
    )
}