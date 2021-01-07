import { getData,saveData} from '@/api/sales/index';



const distribution = {
    state: {
        distributions:null
    },


    mutations: {
        GET_DISTRIBUTIONS: (state, value) => {
            state.distributions = value
        },
        SET_DISTRIBUTIONS: (state, value) => {
            state.distributions = value
        }
    },

    actions: {
        Getdistributions({ commit, state }) {
            return new Promise((resolve, reject) => {
                getData().then(response => {
                    const data = response.data
                    commit('GET_DISTRIBUTIONS', data)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Setdistributions({ commit, state },query) {
            return new Promise((resolve, reject) => {
                saveData(query).then(response => {
                    const data = response.data
                    commit('SET_DISTRIBUTIONS', data)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default distribution