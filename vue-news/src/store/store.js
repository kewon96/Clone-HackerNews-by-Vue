import Vue from "vue";
import Vuex from "vuex";
import { fetchAsks, fetchJobs, fetchNews } from '../api/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        newsArray: [],
        askArray: [],
        jobArray: [],
    },
    getters: {
        jobArray(state) {
            return state.jobArray;
        }
    },
    mutations: {
        SET_NEWS(state, data) {
            state.newsArray = data;
        },
        SET_ASK(state, data) {
            console.log(data)
            state.askArray = data;
        },
        SET_JOBS(state, data) {
            console.log(data)
            state.jobArray = data;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNews()
                .then(response => {
                    context.commit('SET_NEWS', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        FETCH_ASK({ commit }) { // 구조분해 할당
            fetchAsks()
                .then(response => {
                    console.log(response)
                    commit('SET_ASK', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        FETCH_JOBS({ commit }) {
            fetchJobs()
                .then(response => {
                    console.log(response)
                    commit('SET_JOBS', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})