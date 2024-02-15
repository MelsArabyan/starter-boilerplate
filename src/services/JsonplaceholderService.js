// import fetch from 'auth/FetchInterceptor'
import { API_BASE_URL } from 'configs/AppConfig'

const jsonplaceholderService = {}

jsonplaceholderService.getUsers = function () {
  return fetch(API_BASE_URL+'/users')
  .then((response) => {
    return response.json()
  })
}

export default jsonplaceholderService