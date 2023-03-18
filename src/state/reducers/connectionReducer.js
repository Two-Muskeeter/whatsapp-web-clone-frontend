const reducer = (state = null, action) => {
    if (action.type === 'connect') {
        state = action.payload
        return state
    }
    else {
        return state
    }
}
export default reducer  