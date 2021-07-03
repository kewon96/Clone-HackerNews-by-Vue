/**
 * 이런 API와 관련된 로직은 별도의 폴더에서 관리
 * import를 통해 라이브러리를 끌고올때 기본적으로 node_modules에 있는것을 끌고온다.
 *
 */

import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본설정 Map
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들 정리

/**
 *
 * @param backUrl baseUrl뒤에 추가될 url
 * @returns {Promise<AxiosResponse<any>>}
 */
const fetchList = (backUrl) => {
    return axios.get(`${config.baseUrl}${backUrl}`);
}

export {
    fetchList
}

