export const LOGIN_USER = 'LOGIN_USER'
function loginUser(user, password){
    return {
        type: LOGIN_USER,
        'user': user
    }
};

export const LOGGED_USER = 'LOGGED_USER'
function loggedUser(json){
    return {
        type: LOGGED_USER,
        "user": json.user
    }
};

export function tryLoginUser(user, password){
    return function(dispatch){
        dispatch(loginUser(user, password));

        return fetch('api/sessions', {
            method: 'PUT',
            body: JSON.stringify({
                "user": user,
                "password": password
            })
        }).then(response => response.json())
        .then(json=> 
                dispatch(loggedUser(json))
         )
    };
};
