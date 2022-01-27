export const filtrarPesquisa = (lista, pesquisa) => {
    return lista.filter((e) => {
        return new RegExp(pesquisa, 'ig').test(e.title);
    });
};