export class DataBase {
    constructor() { }

    url(endpoint) { return `https://6520eac8a4199548356ca415.mockapi.io/api/${endpoint}` }

    options(http, payload) {
        return {
            method: http,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer token'
            },
            body: JSON.stringify(payload)
        };
    }

    async get(endpoint, method) { return await fetch(this.url(endpoint), this.options(method)) }

    async post(endpoint, method, payload) { return await fetch(this.url(endpoint), this.options(method, payload)) }
}