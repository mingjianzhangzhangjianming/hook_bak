import instance from './http'

/**
 * 
 * @returns 获取随机盐salf
 */
export const loginSalt = () => instance.get("/api/api/v1/admintool/salt")
 
/**
 * 
 * @returns 登录
 */
export const loginAuth = data => instance.post("/api/api/v1/admintool/auth",data)
