export default {
  createFullUsersList({ state }) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => (state.fullUsersList = json));
  },
  // Если список большой, то лучше его не тянуть весь и делать запрос к серверу. Я реализую два способа.
  createIdsUsersList({ state }, payload) {
    let updateUrl = 'id=' + payload
    fetch(`https://jsonplaceholder.typicode.com/users?${updateUrl}`)
      .then((response) => response.json())
      .then((json) => {
        state.idsUsersList = json;
      })
    // .then((json) => (state.fullUsersList = json));
  }
};
