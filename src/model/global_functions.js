export class GlobalFunctions {
    HTML__active_li(text) {
        const li = document.querySelectorAll('.header_list li')
        li.forEach((element) => {
            if (element.textContent === text) element.classList.add('active')
            else element.classList.remove('active')
        })
    }

    HTML__clear_main_and_add_info_main(info) {
        const HTML__main = document.querySelector('main')
        HTML__main.innerHTML = '';

        HTML__main.append(info)
    }

    FORMAT__number_to_money(value) {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return formatter.format(value);
    }

    FORMAT__data(dataString) {
        const data = new Date(dataString);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }
}

