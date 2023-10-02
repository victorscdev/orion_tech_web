import { HTML__form_control } from "../forms/forms.js";
import { array_form_employees } from "../../../model/constants.js";

function HTML__create_new_employee() {
    let create__dialog = document.createElement('dialog');
    create__dialog.id = 'DIALOG__new_employee';

    create__dialog.innerHTML = `
        <div class="HEADER__dialog">
            <h2>Título do Diálogo</h2>
        </div>
        <hr />
        <div class="BODY__dialog">
            <div class="FORM__group">
                ${array_form_employees.map((employee) => `${HTML__form_control(employee)}`).join('')}
            </div>
        </div>
        <hr />
        <div class="FOOTER__dialog">
            <button id="CLOSE__dialog">Fechar</button>
        </div>
    `;

    return create__dialog
}

export function OPEN__dialog_new_employee() {
    const dialog = HTML__create_new_employee()
    document.body.appendChild(dialog)

    const BTN__close_dialog = document.getElementById('CLOSE__dialog');

    BTN__close_dialog.addEventListener('click', CLOSE__dialog_new_employee)

    dialog.showModal()
}

export function CLOSE__dialog_new_employee() {
    const dialog = document.getElementById('DIALOG__new_employee');
    if (dialog) {
        dialog.close();
        dialog.remove();
    }
}