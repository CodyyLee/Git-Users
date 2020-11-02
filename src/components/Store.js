import React, { useState } from 'react';
import axios from 'axios';

import Search from './search/Search';
import Results from './results/Results';

export default function Store() {

    const [ store, setStore ] = useState({
        name: "",
        getUser: function() {
            axios.get(`https://api.github.com/users/${this.name}`)
            .then(res => {
                setStore({...store,
                user: res.data});
            })
            .catch(err => {
                console.log(err);
            })
        },
        getFollowers: function () {
            axios.get(`https://api.github.com/users/${this.name}/followers`)
            .then(res => {
                // setStore({...store,
                // followers: res.data});
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
        },
        user: {},
        followers: {}
    })

    return (
        <>
            <Search store={store} setStore={setStore}/>
            <Results store={store}/>
        </>
    )
}