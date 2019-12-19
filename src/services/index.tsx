

import axios from 'axios';
import qs from 'qs';
import config from '../config';

export const storage = {
  getItem(key: string) {
    let value: any = window.localStorage.getItem(key)
    try {
      value = JSON.parse(value)
    } catch (e) {

    } finally {

    }
    return value
  },
  setItem(key: string, value: any) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  },
  removeItem(key: string) {
    window.localStorage.removeItem(key)
  },
}

export function configAxios() {
  (window as any).axiosOrigin = axios.create({
    baseURL: config.API_HOST,
  })
  axios.defaults.baseURL = config.API_HOST
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  axios.defaults.transformRequest = [function (data, headers) {
    return qs.stringify(data)
  }]


  axios.interceptors.request.use(function (config) {
    config.headers.token = storage.getItem('pgy_admin_token')
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(undefined, (error: any) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          storage.removeItem('token')
          storage.setItem('no_auth_url', `${window.location.pathname}${window.location.search}`)
          window.location.assign('/login')
          break
        case 500:
          alert('系统繁忙，请稍后再试')
          break
      }
    }
    return Promise.reject(error)
  })
}

export function getRouteMap(key: string) {
  const map: any = {
    users: [{ name: '用户管理', href: '' }],
  }
  if (key === 'all') {
    return map
  }
  if (key) {
    return map[key]
  }
}
