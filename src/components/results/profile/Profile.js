import React from 'react';
import './Profile.scss';

export default function Profile(props) {

    return (
        <div className='profile'>
            {props.store.user ? 
            <>
                <a className='username' target='_blank' href={props.store.user.html_url}>{props.store.user.login}</a>
                <p className='location'>{props.store.user.location}</p>
                <hr/>
                <img src={props.store.user.avatar_url} className='profile-img'/>
                <p className='bio'>{props.store.user.bio}</p>
            </>
            : null}
        </div>
    )
}