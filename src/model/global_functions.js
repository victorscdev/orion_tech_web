export function FORMAT__number_to_money(value) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatter.format(value);
}