export class ListsHTML {
    constructor() { }

    HTML__create_list_employees(array) {
        const ul = document.createElement('ul');
        ul.classList.add('list_employees')

        ul.innerHTML = `
            ${array.map((element) => `
            <li>
                <div class="header">${element.name}</div>
                <div class="body"></div>
            </li>
            `).join('')}
        `

        return ul
    }
}