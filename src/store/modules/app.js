const state = {
  //  当前设备
  device: 'desktop',
  //  当前时间
  currentDate: new Date().toLocaleString(),
  currentModa: currentMode()
};
//  当前进入时的模式
function currentMode() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return 'dark'
  } else {
    return 'light'
  }
}

const mutations = {
  //  改变设备
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  //  改变时间
  CHANGE_TIME: (state, time) => {
    state.currentDate = time
  },
  //  改变当前模式
  CHANGE_MODE: (state, mode) => {
    state.currentModa = mode
  }
};

const actions = {
  //  异步处理
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  //
  changeTime({ commit }, time) {
    commit('CHANGE_TIME', time)
  },
  //
  changtMode({ commit }, mode) {
    commit('CHANGE_MODE', mode)
  }
};

export default {
  //  解决不同模块命名冲突的问题
  namespaced: true,
  state,
  mutations,
  actions
}
