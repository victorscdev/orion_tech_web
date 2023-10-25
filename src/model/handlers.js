import { EmployeesPages } from "../components/PAGES/employees/employees.pages.js";
import { GlobalFunctions } from "../model/global_functions.js"

import { HTML__add_tags_apontamento_horas } from "../components/PAGES/apontamento_horas/apontamento_horas.pages.js";
export class Handlers {
    constructor() {}

    async get_employee(event) {
        const _employeesPages = new EmployeesPages();
        const _globalFunctions = new GlobalFunctions();

        _globalFunctions.HTML__active_li(event.target.textContent)
        
        _globalFunctions.HTML__clear_main_and_add_info_main(await _employeesPages.HTML__add_tags_employee())
        
    }

    async get_apontamento_horas(event) {
        const _globalFunctions = new GlobalFunctions();

        _globalFunctions.HTML__active_li(event.target.textContent)
        
        const HTML__h1 = document.createElement('h1')
        HTML__h1.innerText = 'Apontamento de Horas'
        
        _globalFunctions.HTML__clear_main_and_add_info_main(await HTML__add_tags_apontamento_horas())
        
    }
    
    // get_payments(event) {
    //     const _globalFunctions = new GlobalFunctions();

    //     _globalFunctions.HTML__active_li(event.target.textContent)
    
    //     const HTML__h1 = document.createElement('h1')
    //     HTML__h1.innerText = 'Pagamentos'
    
    //     _globalFunctions.HTML__clear_main_and_add_info_main(HTML__h1)
    // }
    
    // get_deductions(event) {
    //     const _globalFunctions = new GlobalFunctions();

    //     _globalFunctions.HTML__active_li(event.target.textContent)
    
    //     const HTML__h1 = document.createElement('h1')
    //     HTML__h1.innerText = 'Deduções'
    
    //     _globalFunctions.HTML__clear_main_and_add_info_main(HTML__h1)
    // }
    
    // get_benefits(event) {
    //     const _globalFunctions = new GlobalFunctions();

    //     _globalFunctions.HTML__active_li(event.target.textContent)
    
        
    //     const HTML__h1 = document.createElement('h1')
    //     HTML__h1.innerText = 'Beneficios'
    
    //     _globalFunctions.HTML__clear_main_and_add_info_main(HTML__h1)
    // }
    
    // get_time_sheet(event) {
    //     const _globalFunctions = new GlobalFunctions();

    //     _globalFunctions.HTML__active_li(event.target.textContent)
    
    //     const HTML__h1 = document.createElement('h1')
    //     HTML__h1.innerText = 'Folha de Ponto'
    
    //     _globalFunctions.HTML__clear_main_and_add_info_main(HTML__h1)
    // }
}