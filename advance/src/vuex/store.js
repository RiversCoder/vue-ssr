import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default function createStore() {
    
    let store = new Vuex.Store({
        state:{
            info: ''
        },
        actions:{
            getInfo({ commit }) {
                return axios.get('http://localhost:8008/api/info').then(res => {
                    commit('setInfo' , res.data.data)
                })
            }
        },
        mutations: {
            setInfo(state, res) {
                state.info = res;
            }
        }
    })

    return store

}

