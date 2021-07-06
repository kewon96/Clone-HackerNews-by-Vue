import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";

Vue.use(VueRouter);

export const router = new VueRouter({
    // 해시값 제거
    // 해시값???(http://mkseo.pe.kr/blog/?p=2269)
    // mode: 'history',
    routes: [
        {
          path: '/',
          // 첫페이지를 /news로 이동하게 설정
          redirect: '/news'
        },
        {
            // url
            path: '/news',
            // url 주소로 갔을 때 표시될 component
            component: NewsView
        },
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '/jobs',
            component: JobsView
        },
        {
            path: '/item',
            component: ItemView
        },
        {
            path: '/user',
            component: UserView
        }
    ]
});