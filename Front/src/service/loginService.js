import {jwtDecode} from 'jwt-decode'

export const SaveUser = (token) => {
    const decodedToken = jwtDecode(token)

    const user = {
        fullname: `${decodedToken.firstname} ${decodedToken.lastname}`,
        userId: decodedToken.id,
        JWT: token
    }

    window.localStorage.setItem(
        'TaskManagerUser', JSON.stringify(user)
        )
}

export const GetUser = () => {
    const TaskManagerUser = window.localStorage.getItem('TaskManagerUser')
    const user = JSON.parse(TaskManagerUser)
    return user
}

export const GetToken = () => {
    const TaskManagerUser = window.localStorage.getItem('TaskManagerUser')
    const user = JSON.parse(TaskManagerUser)
    return user.JWT
}

export const GetFullname = () => {
    const TaskManagerUser = window.localStorage.getItem('TaskManagerUser')
    const user = JSON.parse(TaskManagerUser)
    return user.fullname
}

export const GetUserId = () => {
    const TaskManagerUser = window.localStorage.getItem('TaskManagerUser')
    const user = JSON.parse(TaskManagerUser)
    return user.userId
}