function HTML__create_new_employee() {
    let create__dialog = document.createElement('dialog');
    create__dialog.id = 'DIALOG__new_employee';

    create__dialog.innerHTML = `
        <h2>Título do Diálogo</h2>
        <hr />
        <p>Conteúdo do Diálogo</p>
        <button id="CLOSE__dialog">Fechar</button>
    `;

    return create__dialog
}

export function OPEN__dialog_new_employee() {
    const dialog = HTML__create_new_employee()
    document.body.appendChild(dialog)

    const BTN__close_dialog = document.getElementById('CLOSE__dialog');

    BTN__close_dialog.addEventListener('click', CLOSE__dialog_new_employee)

    dialog.showModal()
}

export function CLOSE__dialog_new_employee() {
    const dialog = document.getElementById('DIALOG__new_employee');
    if (dialog) {
        dialog.close();
        dialog.remove();
    }
}