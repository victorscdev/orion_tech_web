import { Handlers } from "./handlers.js"

const _handlers = new Handlers()

export const array_header = [
    {
        name: 'funcionarios',
        title: 'Funcionarios',
        handler: _handlers.get_employee
    },
    {
        name: 'pagamentos',
        title: 'Pagamentos',
        handler: _handlers.get_payments
    },
    {
        name: 'deducoes',
        title: 'Deduções',
        handler: _handlers.get_deductions
    },
    {
        name: 'beneficios',
        title: 'Beneficios',
        handler: _handlers.get_benefits
    },
    {
        name: 'folha_ponto',
        title: 'Folha de Pagamento',
        handler: _handlers.get_time_sheet
    },
]

export const array_employees = [
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

export const array_form_employees = [
    {
        label: 'Nome do Funcionario',
        for: 'name',
        type: 'text'
    },
    {
        label: 'Cargo',
        for: 'office',
        type: 'text'
    },
    {
        label: 'Departamento',
        for: 'departament',
        type: 'text'
    },
    {
        label: 'Salario inicial',
        for: 'wage',
        type: 'number'
    },
]