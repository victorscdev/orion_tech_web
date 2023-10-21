import { FormsHTML } from "../forms/forms.js";
import { array_form_employees } from "../../../model/constants.js";
import { EmployeesBusiness } from "../../../business/employees.business.js";

export class DialogHTML {
    _formsHTML;

    constructor() {
        this._formsHTML = new FormsHTML()
    }

    HTML__create_new_employee() {
        let create__dialog = document.createElement('dialog');
        create__dialog.id = 'DIALOG__new_employee';
    
        create__dialog.innerHTML = `
            <div class="HEADER__dialog">
                <h2>Título do Diálogo</h2>
            </div>
            <hr />
            <div class="BODY__dialog">
                <div class="FORM__group">
                    ${array_form_employees.map((employee) => `${this._formsHTML.HTML__form_control(employee)}`).join('')}
                </div>
            </div>
            <hr />
            <div class="FOOTER__dialog">
                <button id="CLOSE__dialog">Fechar</button>
                <button class="btn_save" id="SAVE__dialog">Salvar</button>
            </div>
        `;
    
        return create__dialog
    }
    
    OPEN__dialog_new_employee() {
        const dialog = this.HTML__create_new_employee()
        document.body.appendChild(dialog)
    
        const BTN__close_dialog = document.getElementById('CLOSE__dialog');
        const BTN__save_dialog = document.getElementById('SAVE__dialog');
    
        BTN__close_dialog.addEventListener('click', this.CLOSE__dialog_new_employee)
        BTN__save_dialog.addEventListener('click', this.SAVE__dialog_new_employee)
    
        dialog.showModal()
    }
    
    CLOSE__dialog_new_employee() {
        const dialog = document.getElementById('DIALOG__new_employee');
        if (dialog) {
            dialog.close();
            dialog.remove();
        }
    }
    
    SAVE__dialog_new_employee() {
        let objectPayload = {};
        const _employeesBusiness = new EmployeesBusiness();
        const formEmployee = document.querySelectorAll("#DIALOG__new_employee .BODY__dialog .FORM__group input")
        
        for (let index = 0; index < formEmployee.length; index++) {
            const element = formEmployee[index];
            objectPayload[element.name] = element.value
            
        }
        _employeesBusiness.create(objectPayload)
    }
}