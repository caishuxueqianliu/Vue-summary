/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
 import axios from 'axios'
//const BASE_URL = 'http://127.0.0.1:3000'
const BASE_URL = '/api'
// //query ？后   parmas 路径
export const reqLogin = (loginForm) => axios.post(BASE_URL+'/login',{loginForm})
export const reqRegister = (loginForm) => axios.post(BASE_URL+'/register',{loginForm})