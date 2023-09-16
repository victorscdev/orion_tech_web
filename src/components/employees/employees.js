import { HTML__create_table_employee } from "../table/table.js";

function HTML__create_buttons() {
    const btn__create_employee = document.createElement('button')

    btn__create_employee.innerText = 'Cadatrar';

    return btn__create_employee
}

export function HTML__add_tags_employee() {
    const div = document.createElement('div')

    div.append(HTML__create_buttons(), HTML__create_table_employee())

    return div
}