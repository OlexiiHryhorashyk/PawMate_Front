import axios from "axios"
import {auth} from "./adapters/firebase"

const httpMethod =
    (method) =>
        async (url, payload = {}, headers = {}, cancelToken = null) => {
            const {params = {}, data = {}} = payload

            const token = await auth.currentUser.getIdToken()

            headers = {
                ...headers,
                Authorization: `Bearer ${token}`
            }

            return axios({
                method,
                url,
                params,
                data,
                headers,
                cancelToken,
            })
                .catch((error) => {
                    if (error.response.status === 401) {
                        setTimeout(() => {window.location.href = "/login"}, 1000)
                    }
                    else {
                        throw error
                    }
                })
        }

const http = {
    get: httpMethod("get"),
    post: httpMethod("post"),
    put: httpMethod("put"),
    patch: httpMethod("patch"),
    delete: httpMethod("delete"),
}

export default http
