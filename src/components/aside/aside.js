function HTML__create_list(object) {
    const HTML__li = document.createElement('li')

    HTML__li.textContent = object.title
    HTML__li.addEventListener('click', object.handler)


    return HTML__li
}

function create__header(array){
    const header_list = document.createElement('ul');
    const header_image = document.createElement('img');

    header_image.src = '/assets/images/logo_2_v2.png'
    header_image.title = 'Logo Orion Tech'

    header_list.append(header_image)

    array.forEach(element => {
        header_list.append(HTML__create_list(element))
    });

    return header_list
}

export function read__header(array){
    const aside = document.querySelector('.header_list')
    aside.append(create__header(array))
}