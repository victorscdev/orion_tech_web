import { EmployeesService } from "../services/employees.service.js";

export class EmployeesBusiness {
    _employeesService;
    _read_data;

    constructor() {
        this._employeesService = new EmployeesService()
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
            name: information.name,
            office: information.office,
            departament: information.departament,
            wage: information.wage,
            deductions: this.set_salary_deduction(information.wage, this.set_net_salary(information.wage)),
            net_salary: this.set_net_salary(information.wage),
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
        console.log(this._employeesService.db_create_response);
    }

    async read() {
        await this._employeesService.db_read()
        const response = this._employeesService.db_read_response
        if (!response.length) {
            alert(`error na listagem de funcionarios`)
        } else {
            this._read_data = this._employeesService.db_read_response
        }
    }
}