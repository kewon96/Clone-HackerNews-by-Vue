import Vue from "vue";
import Vuex from "vuex";
import { fetchList } from '../api/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        newsArray: [],
        askArray: [],
        jobArray: [],
    },
    // getters,
    mutations: {
        SET_DATE(state, data) {
            state.newsArray = data;
        }
    },
    actions: {
        FETCH_DATE(context, url) {
            fetchList(url)
                .then(response => {
                    console.log(response)
                    context.commit('SET_DATE', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})