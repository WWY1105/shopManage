import { login, getInfo ,branch} from '@/api/login'

import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message } from 'element-ui'

const user = {
  state: {
    token: getToken(),
    userInfo:null,
    branch: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    // SET_NAME: (state, name) => {
    //   state.name = name
    // },
    // SET_AVATAR: (state, avatar) => {
    //   state.avatar = avatar
    // },
    SET_BRANCH: (state, branch) => {
      state.branch = branch
    },
    SET_USERINFO:(state,user)=>{
      state.userInfo=user
    }

  },

  actions: {
     // 摊位
     Branch({ commit }) {
      return new Promise((resolve, reject) => {
        branch({}).then(response => {
          //console.log(response)
          commit('SET_BRANCH', response.data);
          resolve(response)
        })
      
      })
    },
    // 登录
    Login({ commit }, query) {
      return new Promise((resolve, reject) => {
        login(query).then(response => {
          if (response && response.access_token) {
            setToken(response.access_token)
            commit('SET_TOKEN', response.access_token);
          } else {
            Message({
              showClose: true,
              message: response.msg,
              duration: 3 * 1000,
              type: 'error'
            })
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const data = response.data
          commit('SET_USERINFO', data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

   
  }
}

export default user
