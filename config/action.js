const addUserAction = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
    }

const updateUserAction = (user) => {
    return{type : 'UPDATE_USER',
    payload: user
} 
}

