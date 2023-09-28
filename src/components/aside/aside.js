function HTML__create_list(object) {
    const HTML__li = document.createElement('li')

    HTML__li.textContent = object.title
    HTML__li.addEventListener('click', object.handler)


    return HTML__li
}

function HTML__create_logotype() {
    const header_image = document.createElement('img');

    header_image.src = '/assets/images/logo_2.jpg'
    header_image.title = 'Logo Orion Tech'

    return header_image
}

function create__header(array){
    const header_list = document.createElement('ul');

    array.forEach(element => {
        header_list.append(HTML__create_list(element))
    });

    return header_list
}

export function read__header(array){
    const aside = document.querySelector('.header_list')
    aside.append(HTML__create_logotype(), create__header(array))
}