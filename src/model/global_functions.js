export function HTML__active_li(text) {
    const li = document.querySelectorAll('.header_list li')
    li.forEach((element) => {
        if(element.textContent === text) element.classList.add('active')
        else element.classList.remove('active')
    })
}

export function HTML__clear_main_and_add_info_main(info) {
    const HTML__main = document.querySelector('main')
    HTML__main.innerHTML = '';

    HTML__main.append(info)
}

export function FORMAT__number_to_money(value) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatter.format(value);
}