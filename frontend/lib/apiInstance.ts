import axios from "axios"
import { BACKEND_URL } from "./constants"

export const publicApiInstance = axios.create({
    baseURL: BACKEND_URL
})