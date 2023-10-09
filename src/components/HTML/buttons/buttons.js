export class ButtonsHTML {
    HTML__create_button_register(event) {
        const btn__register = document.createElement('button')
        btn__register.classList.add('btn_register')
        btn__register.addEventListener('click', event)
    
        btn__register.innerText = 'Cadatrar';
    
        return btn__register
    }
}