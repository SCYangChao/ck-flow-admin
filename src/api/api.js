/**
 * HTT PAPI变量定义
 * @type {string}
 * @private
 */
let _BASE_URL_AUTH = "/oauth";
let _BASE_URL_SYS = "/api/sys";



const apiConfig = {
  'login': `${_BASE_URL_AUTH}/token`,
  'loginOut':"/auth/logout",
  "menu_tree":`${_BASE_URL_SYS}/1.0/sysMenu/tree`,
  "user_list":`${_BASE_URL_SYS}/v1.0/sysUser/list`,
}

export default apiConfig
