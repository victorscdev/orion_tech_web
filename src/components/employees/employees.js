import { HTML__create_table_employee } from "../HTML/tables/tables.js";
import { HTML__create_button_register } from "../HTML/buttons/buttons.js"
import { OPEN__dialog_new_employee } from "../HTML/dialogs/dialogs.js";



export function HTML__add_tags_employee() {
    const div = document.createElement('div')

    div.append(HTML__create_button_register(EVENT__open_dialog), HTML__create_table_employee())

    return div
}

function EVENT__open_dialog() {
    OPEN__dialog_new_employee()
}