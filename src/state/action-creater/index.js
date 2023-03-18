export const connect = (connection_id) => {
    return (dispatch) => {
        dispatch({
            type: 'connect',
            payload: connection_id
        })
    }
}