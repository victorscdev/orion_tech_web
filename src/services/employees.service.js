import { DataBase } from "../db/dataBase.js"

export class EmployeesService {
    _db;
    db_create_response;
    db_read_response;


    constructor() {
        this._db = new DataBase()
    }

    async db_create(payload) {
        await this._db.post(`employees`, `POST`, payload)
            .then((objectAssync) => this.db_create_response  = objectAssync)
            .catch((error) => console.error(error))
    }

    async db_read() {
        await this._db.get(`employees`)
            .then((objectAssync) => objectAssync.json())
            .then((response) => this.db_read_response = response)
            .catch((error) => console.error(error))
    }
}
