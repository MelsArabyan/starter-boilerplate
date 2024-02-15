import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { getUsersData } from 'redux/actions/Users';
import { GET_USERS_DATA } from 'redux/constants/Users';
import jsonplaceholderService from 'services/jsonplaceholderService';

export function* getUsersDataSaga() {
    yield takeEvery(GET_USERS_DATA, function* () {
          try {
                const users = yield call(jsonplaceholderService.getUsers);
            //   if (users) {
            //       yield put(showAuthMessage(user.message));
            //   } else {
            //       localStorage.setItem(AUTH_TOKEN, user.user.uid);
            //       yield put(authenticated(user.user.uid));
            //   }
                yield put(getUsersData(users));  
          } catch (err) {
            //   yield put(showAuthMessage(err));
          }
      });
  }

  export default function* rootSaga() {
    yield all([
          fork(signInWithFBEmail),
    ]);
  }