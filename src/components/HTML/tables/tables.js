import { GlobalFunctions } from "../../../model/global_functions.js";

export class TablesHTML {
    constructor() {}
    HTML__create_table_employee(array) {
        const _globalFunctions = new GlobalFunctions()
        const table = document.createElement('table')
        table.id = "table_employee"
    
        table.innerHTML = `
        <thead>
            <tr>
                <th>Nome do Funcionario</th>
                <th>Data de Admissão</th>
                <th>Valor por Hora(R$)</th>
            </tr>
        </thead>
        <tbody>
            ${array.map((employee) => `
            <tr>
                <td>${ employee.nome }</td>
                <td>${ employee.data_admissao }</td>
                <td>${ _globalFunctions.FORMAT__number_to_money(employee.vlr_hora) }</td>
            </tr>  
            `).join('')}
        </tbody>
        `;
    
        return table
    }

    HTML__update_table_employee(array) {
        const _globalFunctions = new GlobalFunctions()
        const table = document.getElementById("table_employee")

        table.innerHTML = "";

        table.innerHTML = `
        <thead>
            <tr>
                <th>Nome do Funcionario</th>
                <th>Data de Admissão</th>
                <th>Valor por Hora(R$)</th>
            </tr>
        </thead>
        <tbody>
            ${array.map((employee) => `
            <tr>
                <td>${ employee.nome }</td>
                <td>${ employee.data_admissao }</td>
                <td>${ _globalFunctions.FORMAT__number_to_money(employee.vlr_hora) }</td>
            </tr>  
            `).join('')}
        </tbody>
        `;
    }
}