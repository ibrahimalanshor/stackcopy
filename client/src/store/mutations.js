export default {
  toggleSidebar: state => state.sidebarOpen = !state.sidebarOpen,
  createNotification: (state, text) => {
    state.notification.active = true
    state.notification.text = text
    state.notification.count = 0
  },
  destroyNotification: (state) => {
    state.notification.active = false
    state.notification.count = 0
  },
  checkNotification: state => {
    const { active, count } = state.notification

    if (active) {
      if (count >= 1) {
        state.notification.active = false
        state.notification.count = 0
      } else {
        state.notification.count++
      }
    }
  },
  addTokenHeader: (state, token) => {
    state.api.defaults.headers.common['authorization'] = token
  }
}