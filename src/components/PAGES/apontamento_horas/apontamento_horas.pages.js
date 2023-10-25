import { HTML__create_search_employee } from "../../HTML/search/search.component.js"

import { EmployeesService } from "../../../services/employees.service.js"

export async function HTML__add_tags_apontamento_horas() {
    const _employeesService = new EmployeesService();
    await _employeesService.db_read()

    console.log(_employeesService.db_read_response);

    const div = document.createElement('div')
    div.append(HTML__create_search_employee(_employeesService.db_read_response))

    return div
}