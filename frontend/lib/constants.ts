export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT

export const ACCESS_TOKEN_COOKIE_NAME = "access_token"
export const REFRESH_TOKEN_COOKIE_NAME = "refresh_token"

export const COOKIE_OPTIONS: object = {
    sameSite:"Lax"
    secure:ENVIRONMENT === "production"
}