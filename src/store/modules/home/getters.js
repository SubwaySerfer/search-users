export default {
  getCurrentFilteredList(state) {
    if (state.idsUsersList.length > 0) {
      return state.idsUsersList
    } else {
      return state.userNameList
    }
  }
};
