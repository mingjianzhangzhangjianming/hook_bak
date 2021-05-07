import instance from './http'

export const loginSalt = () => {
   return instance.get("/api/api/v1/admintool/salt")
}

export const loginAuth = (data) => {
    return instance.post("/api/api/v1/admintool/auth",data)
}