export default {
  createUserNameList(state, payload) {
    if (payload.arr) {
      let usersSet = new Set()
      payload.arr.forEach((item) => {
        state.fullUsersList.forEach((el) => {
          if (el.username.toLowerCase().slice(0, item.length) === item.toLowerCase()) {
            usersSet.add(el);
          }
        })
      })
      state.userNameList = Array.from(usersSet)
    } else {
      state.userNameList = state.fullUsersList.filter(el => {
        return el.username.toLowerCase().slice(0, payload.length) === payload.toLowerCase();
      })
    }

  },
  clearLists(state) {
    state.idsUsersList = [];
    state.userNameList = [];
    state.currentUser = null;
  },
  chooseCurrentUser(state, payload) {
    state.currentUser = payload;
  },
  clearError(state) {
    state.errorText = ''
  }
}