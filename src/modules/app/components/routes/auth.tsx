import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';

function Auth(props:any) {
    const history = useHistory();

    if (!props.auth) {
        if (localStorage.getItem('auth-token'))
            return props.children;
        else
            return <Redirect to='/signIn' />
    }
    else {
        if (localStorage.getItem('auth-token'))
            return <Redirect to='/dashboard' />
        else
            return props.children;
    }
}

export default Auth