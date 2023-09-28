import { handler__get_employee, handler__get_payments, handler__get_deductions, handler__get_benefits, handler__get_time_sheet } from "./handlers.js"

export const array_header = [
    {
        name: 'funcionarios',
        title: 'Funcionarios',
        handler: handler__get_employee
    },
    {
        name: 'pagamentos',
        title: 'Pagamentos',
        handler: handler__get_payments
    },
    {
        name: 'deducoes',
        title: 'Deduções',
        handler: handler__get_deductions
    },
    {
        name: 'beneficios',
        title: 'Beneficios',
        handler: handler__get_benefits
    },
    {
        name: 'folha_ponto',
        title: 'Folha de Pagamento',
        handler: handler__get_time_sheet
    },
]

export let array_employees = [
    {
        name: '',
        office: '',
        departament: '',
        wage: 0,
        benefits: '',
        deductions: 0,
        net_salary: 0,
    },
    {
        name: 'Victor Santana Costa',
        office: 'Software engineer',
        departament: 'Payments',
        wage: 10000,
        benefits: 'VR, VT',
        deductions: 2000,
        net_salary: 8000,
    }
]