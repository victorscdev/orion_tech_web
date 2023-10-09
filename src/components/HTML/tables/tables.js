import { GlobalFunctions } from "../../../model/global_functions.js";

export class TablesHTML {
    constructor() {}
    HTML__create_table_employee(array) {
        const _globalFunctions = new GlobalFunctions()
        const table = document.createElement('table')
    
        table.innerHTML = `
        <thead>
            <tr>
                <th>Nome do Funcionario</th>
                <th>Cargo</th>
                <th>Departamento</th>
                <th>Salario(bruto)</th>
                <th>Beneficio</th>
                <th>Deduções</th>
                <th>Salario liquido</th>
            </tr>
        </thead>
        <tbody>
            ${array.map((employee) => `
            <tr>
                <td>${ employee.name }</td>
                <td>${ employee.office }</td>
                <td>${ employee.departament }</td>
                <td>${ _globalFunctions.FORMAT__number_to_money(employee.wage) }</td>
                <td>${ employee.benefits }</td>
                <td>${ _globalFunctions.FORMAT__number_to_money(employee.deductions) }</td>
                <td>${ _globalFunctions.FORMAT__number_to_money(employee.net_salary) }</td>
            </tr>  
            `).join('')}
        </tbody>
        `;
    
        return table
    }
}