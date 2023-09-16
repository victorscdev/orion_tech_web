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
        <tr>
            <td>Victor Santana Costa</td>
            <td>Engenheiro de Software</td>
            <td>Payments</td>
            <td>R$ 10.000,00</td>
            <td>VR, VT</td>
            <td>R$ 2.000,00</td>
            <td>R$ 8.000,00</td>
        </tr>
    </tbody>
    `;

    return table
}