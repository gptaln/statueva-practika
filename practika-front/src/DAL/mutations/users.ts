import {gql} from '@apollo/client'

export const ADD_USER = gql`
    mutation addUser($user: UserInput) {
        addUser(user: $user)
    }
`