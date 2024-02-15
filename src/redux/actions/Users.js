import { DELETE_USER, GET_USERS_DATA, SHOW_USERS_LOADING } from "redux/constants/Users"

export const getUsersData = (users) => {
    return{
        type: GET_USERS_DATA,
        users
    }
}

export const showUsersLoading = () => {
    return {
      type: SHOW_USERS_LOADING,
    }
  }

  export const deleteUser = (userID) => {
    return {
      type: DELETE_USER,
      userID
    }
  }