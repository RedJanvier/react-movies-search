import { GET_MEMBERS } from './membersTypes'

export const initialState = {
    members: 8,
}

export const membersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MEMBERS:
            return {
                ...state,
                members: action.payload
            }
        default:
            return state
    }
}