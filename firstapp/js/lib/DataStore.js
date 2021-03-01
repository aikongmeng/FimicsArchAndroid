/**
 * tips:
 * 1. TypeError: Network request failed at EventTarget.xhr.onerror 问题请关闭代理并重启电脑
 */
export default class DataStore {
    /**
     * 获取网络数据
     * @param url
     * @returns {Promise<void>}
     */
    async fetchData(url) {
        let header = {'auth-token': 'MTU5Mjg1MDg3NDcwNw==', 'boarding-pass': '38DB5B066946BB685BF3E9DCD9E3EF1F'};
        return new Promise((resolve, reject) => {
            fetch(url, {headers: header})
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else if (response.status === 401) {
                        console.log('response.status is 401.');
                        return response.text();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then((responseData) => {
                    if (typeof responseData === 'string') {
                        reject(responseData);
                    } else {
                        resolve(responseData['data']);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }

}
