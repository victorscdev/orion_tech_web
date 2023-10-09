// import { HTML__create_table_employee } from "../../HTML/tables/tables.js";
import { ButtonsHTML } from "../../HTML/buttons/buttons.js"
import { DialogHTML } from "../../HTML/dialogs/dialogs.js";
import { ListsHTML } from "../../HTML/lists/lists.js";
import { TablesHTML } from "../../HTML/tables/tables.js";

import { EmployeesBusiness } from "../../../business/employees.business.js";
import { EmployeesService } from "../../../services/employees.service.js";

export class EmployeesPages {
    _listsHTML;
    _buttonsHTML;
    _tablesHTML
    _employeesBusiness;
    _employeesService;

    constructor() {
        this._listsHTML = new ListsHTML()
        this._buttonsHTML = new ButtonsHTML()
        this._tablesHTML = new TablesHTML()
        this._employeesBusiness = new EmployeesBusiness()
        this._employeesService = new EmployeesService();

    }

    async HTML__add_tags_employee() {
        await this._employeesBusiness.read()

        const div = document.createElement('div')
        div.append(this._buttonsHTML.HTML__create_button_register(this.EVENT__open_dialog), this._tablesHTML.HTML__create_table_employee(this._employeesBusiness._read_data))
        return div
    }

    EVENT__open_dialog() {
        const _dialogHTML = new DialogHTML()
        _dialogHTML.OPEN__dialog_new_employee()
    }
}