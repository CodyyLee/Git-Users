import React from 'react';
import './Search.scss';
import { FaSearch } from 'react-icons/fa';

export default function Search(props) {

    const changeHandler = e => {
        props.setStore({...props.store,
             name: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(props.store.name);
        props.store.getUser();
    }

    return (
        <div className='search'>
            <input type='text' id='search-bar' onChange={changeHandler} placeholder='Enter a Username...' />

            <button type='submit'>
                <FaSearch onClick={submitHandler}/>
            </button>
        </div>
    )
}