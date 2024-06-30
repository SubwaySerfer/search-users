export default {
  createUserNameList(state, payload) {
    state.userNameList = state.fullUsersList.filter(el => {
      return el.username.toLowerCase().slice(0, payload.length) === payload.toLowerCase();
    })
  },
  clearLists(state) {
    state.idsUsersList = [];
    state.userNameList = [];
    state.currentUser = null;
  },
  chooseCurrentUser(state, payload) {
    state.currentUser = payload;
  }
}