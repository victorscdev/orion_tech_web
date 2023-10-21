if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('Service Worker registrado com sucesso', reg))
        .catch((err) => console.log('Erro ao registrar o Service Worker', err));
}
