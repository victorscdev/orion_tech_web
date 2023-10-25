export async function HTML__create_search_employee(employee) {
    const search_input = document.createElement("div")
    search_input.id = "search_input"

    // search_input.innerHTML = `
    //     <div class="FORM__control">
    //         <label for="funcionario">Pesquise um Funcionario</label>
    //         <input name="funcionario" type="text">
    //     </div>
    // `;
    search_input.innerHTML = `
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Options</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
                <option selected>Selecione um Funcionario</option>
                ${employee.map((element) => `
                    <option value="${element.id}">${element.nome}</option>
                `).join('')}
            </select>
        </div>
    `;

    return search_input;
}