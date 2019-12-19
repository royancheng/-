// console.log(process.env.REACT_APP_ENV)

let config = {
    API_HOST: 'http://api.dev.pgy.lizhiweike.com',
    MAIN_URL: 'http://localhost:3000',
    H5_MAIN: 'http://dev.pgy.lizhiweike.com',
    AUTH_URL: 'https://open.lizhiweike.com',
    CLIENT_ID: 'pgy_cps',
    DEV_CLIENT_ID: 'pgy_cps_dev',
};

if (process.env.REACT_APP_ENV === 'development') {
    config = {
        API_HOST: 'http://api.dev.pgy.lizhiweike.com',
        MAIN_URL: 'http://pgy-promote-dev.lizhiweike.com',
        H5_MAIN: 'http://dev.pgy.lizhiweike.com',
        AUTH_URL: 'https://open.lizhiweike.com',
        CLIENT_ID: 'pgy_cps',
        DEV_CLIENT_ID: 'pgy_cps_dev',
    };
}

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        API_HOST: 'https://api-pgy.lizhiweike.com',
        MAIN_URL: 'https://pgy-promote.lizhiweike.com',
        H5_MAIN: 'https://pgy.lizhiweike.com',
        AUTH_URL: 'https://open.lizhiweike.com',
        CLIENT_ID: 'pgy_cps',
        DEV_CLIENT_ID: 'pgy_cps_dev',
    };
}

export default config;
