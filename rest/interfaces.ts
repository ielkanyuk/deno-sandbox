export interface User {
    id: string,
    name: string
}

export interface Context {
    response: any,
    params?: {
        id: string
    }
}