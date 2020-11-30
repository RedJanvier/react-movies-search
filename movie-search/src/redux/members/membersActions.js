import { GET_MEMBERS } from './membersTypes'


export const get_members = (members) => {
    return {
        type: GET_MEMBERS,
        payload: members
    }
}