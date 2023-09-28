import { array_employees } from "../../../model/constants.js";
import { FORMAT__number_to_money } from "../../../model/global_functions.js";

export function HTML__create_table_employee() {
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
        ${array_employees.map((employee) => `
        <tr>
            <td>${ employee.name }</td>
            <td>${ employee.office }</td>
            <td>${ employee.departament }</td>
            <td>${ FORMAT__number_to_money(employee.wage) }</td>
            <td>${ employee.benefits }</td>
            <td>${ FORMAT__number_to_money(employee.deductions) }</td>
            <td>${ FORMAT__number_to_money(employee.net_salary) }</td>
        </tr>  
        `).join('')}
    </tbody>
    `;

    return table
}