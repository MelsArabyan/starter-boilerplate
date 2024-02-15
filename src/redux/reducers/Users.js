const { GET_USERS_DATA, SHOW_USERS_LOADING, DELETE_USER } = require("redux/constants/Users")

const initState = {
    loading: false,
    usersData: [],
  }

  const users = (state = initState, action) => {
    switch (action.type) {
      case SHOW_USERS_LOADING: {
        return {
          ...state,
          loading: true
        }
      }
      case GET_USERS_DATA: 
        return{
            ...state,
            loading: false,
            usersData: action.users
        }
      case DELETE_USER:
        return{
          ...state,
          usersData: state.usersData.filter(item => item.id !== action.userID)
        }
      default: 
        return state
    }
  }

  export default users