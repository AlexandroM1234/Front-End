export const initialState = {
    title: '',
    body: '',
    author: '',
    isFetching: false,
    error: ''
}

export const howToReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
    }
}