import qs from 'qs'
import leftPad from 'left-pad'


export function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf('android') > -1
}

export function isIos() {
  return navigator.userAgent.indexOf('iP') > -1
}

export function isIphoneX() {
  return /iphone/gi.test(navigator.userAgent) && (window.screen.height === 812 && window.screen.width === 375)
}

export function getQuery() {
  return qs.parse(window.location.search.substr(1))
}

export function renderMoney(num: number) {
  return (num / 100).toFixed(2)
}

export function formatDate(time: number) {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = leftPad(date.getMonth() + 1, 2, 0)
  let day = leftPad(date.getDate(), 2, 0)
  let hours = leftPad(date.getHours(), 2, 0)
  let minutes = leftPad(date.getMinutes(), 2, 0)
  return `${year}-${month}-${day} ${hours}:${minutes}`
}

export function getArrayObjectIndex(arr: any[], key: string, val: any) {
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      index = i
      break
    }
  }
  return index
}

export function checkIfEmptyStr(str: string) {
  let newStr = str.replace(' ', '');
  if (newStr.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function judgePhone(str: string) {
  let reg = /^1[3,4,5,6,7,8,9]{1}[0-9]{9}$/;
  return reg.test(str);
}

export function getJsonFromUrl() {
  let query = window.location.search.substr(1);
  if (query === '') return null;

  let result: any = {};
  query.split('&').forEach((part: string) => {
    let item = part.split('=');
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}