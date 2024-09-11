function pesquisar(){
    let pesquisa = document.getElementById("cars-search")

    let input = document.getElementById("inp-text").value

    let result = "";
    if (!input){
        result = '<p>Informação Invalida</p>'
        pesquisa.innerHTML = result
        return
    }
    for (let infos of dados){
        if (infos.nome.toLowerCase().includes(input.toLowerCase()) || infos.especs.toLowerCase().includes(input.toLowerCase()) || infos.tag.toLowerCase().includes(input.toLowerCase())){
        result += `
        <div class="cars-result">
        <h2>${infos.nome}</h2>
        <p class="desc">ESPECIFICAÇÕES: ${infos.especs}</p>
        <a href=${infos.link} target="_blank">Saiba Mais</a>
        </div> `}     
    }
    if (!result){
        result = '<p>Nenhum resultado encontrado</p>'
    }
pesquisa.innerHTML = result
}