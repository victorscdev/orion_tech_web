import { GlobalFunctions } from "../model/global_functions.js";
import { EmployeesService } from "../services/employees.service.js";
import { DialogHTML } from "../components/HTML/dialogs/dialogs.js";
import { TablesHTML } from "../components/HTML/tables/tables.js";

export class EmployeesBusiness {
    _employeesService;
    _GlobalFunctions;
    _read_data;

    constructor() {
        this._employeesService = new EmployeesService()
        this._GlobalFunctions = new GlobalFunctions()
    }

    set_salary_deduction(wage, deduction) {
        return wage - deduction
    }

    set_net_salary(wage) {
        if (wage > 0 && wage < 2112) return wage
        else if (wage > 2112.01 && wage < 2826.65) return wage - (wage * (7.5 / 100))
        else if (wage > 2826.66 && wage < 3751.05) return wage - (wage * (15.0 / 100))
        else if (wage > 3751.06 && wage < 4664.68) return wage - (wage * (22.5 / 100))
        else if (wage > 4664.68) return wage - (wage * (27.5 / 100))
    }

    set_new(information) {
        const info = {
            nome: information.nome,
            data_admissao: this._GlobalFunctions.FORMAT__data(information.data_admissao),
            vlr_hora: information.vlr_hora,
        }

        return info
    }

    async create(employee) {
        for (let key in employee) {
            if (
                employee[key] === "" ||
                employee[key] === null ||
                employee[key] === 0
            ) {
                return alert(`Preencha o campo "${key}" corretamente`)
            }
        }

        await this._employeesService.db_create(this.set_new(employee));
        const _DialogHTML = new DialogHTML()
        if(this._employeesService.db_create_response.ok) {
           await this._employeesService.db_read()
            const _TablesHTML = new TablesHTML()
            
            _DialogHTML.CLOSE__dialog_new_employee()
            _TablesHTML.HTML__update_table_employee(this._employeesService.db_read_response)
        }
    }

    async read() {
        await this._employeesService.db_read()
        const response = this._employeesService.db_read_response
        if (!response.length) {
            alert(`error na listagem de funcionarios`)
            this._read_data = this._employeesService.db_read_response
        } else {
            this._read_data = this._employeesService.db_read_response
        }
    }
}