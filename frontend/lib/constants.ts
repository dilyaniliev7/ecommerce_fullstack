export const BACKEND_URL = process.env.BACKEND_URL

export const ENVIRONMENT = process.env.ENVIRONMENT

export const ACCESS_TOKEN_COOKIE_NAME = "access_token"
export const REFRESH_TOKEN_COOKIE_NAME = "refresh_token"

export const COOKIE_OPTIONS: object = {
    httpOnly: true,
    secure:ENVIRONMENT === "production"
}