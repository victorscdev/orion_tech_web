import { HTML__active_li, HTML__clear_main_and_add_info_main } from "./global_functions.js"
import { HTML__add_tags_employee } from "../components/employees/employees.js"

export function handler__get_employee(event) {
    HTML__active_li(event.target.textContent)
    
    const HTML__h1 = document.createElement('h1')
    HTML__h1.innerText = 'Funcionarios'
    
    HTML__clear_main_and_add_info_main(HTML__add_tags_employee())
    
}

export function handler__get_payments(event) {
    HTML__active_li(event.target.textContent)

    const HTML__h1 = document.createElement('h1')
    HTML__h1.innerText = 'Pagamentos'

    HTML__clear_main_and_add_info_main(HTML__h1)
}

export function handler__get_deductions(event) {
    HTML__active_li(event.target.textContent)

    const HTML__h1 = document.createElement('h1')
    HTML__h1.innerText = 'Deduções'

    HTML__clear_main_and_add_info_main(HTML__h1)
}

export function handler__get_benefits(event) {
    HTML__active_li(event.target.textContent)

    
    const HTML__h1 = document.createElement('h1')
    HTML__h1.innerText = 'Beneficios'

    HTML__clear_main_and_add_info_main(HTML__h1)
}

export function handler__get_time_sheet(event) {
    HTML__active_li(event.target.textContent)

    const HTML__h1 = document.createElement('h1')
    HTML__h1.innerText = 'Folha de Ponto'

    HTML__clear_main_and_add_info_main(HTML__h1)
}