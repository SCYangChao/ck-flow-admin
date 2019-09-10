import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  menu:JSON.parse(window.localStorage.getItem("menu"))
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_MENU:(state ,menu) =>{
    state.menu=menu
  }
}
const actions = {
  loadMenu({ commit }) {

    return new Promise((resolve, reject) => {
      $http.http({
        type: "get",
        url: "menu_tree",
        params: {}
      })
        .then((data) => {

          commit("SET_MENU",data.data) ;
          window.localStorage.setItem("menu" ,JSON.stringify(data.data));
        })
        .catch(() => {});

    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

