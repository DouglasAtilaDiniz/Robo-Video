const algorithmia = require('algorithmia')
const algorithmiaKey= require('../credential/algorithm.json')  


async function robot(content){
    console.log(`Recebi com sucesso o content: ${content.searchTerm}`)
  await  fetchContentFromWikipedia(content)
    //sanitizeContent(content)
    //breakContentIntoSentences(content)

   async function fetchContentFromWikipedia(content){
const algorithmiaAlthenticated = algorithmia(algorithmiaKey)
//althentificação do site
const WinkipediaAlgotithmia = algorithmiaAlthenticated.algo('web/wikipediaParser/0.1.2')
//instancia do site para utilIzar
const wikipediaResponde = await WinkipediaAlgotithmia.pipe(content.searchTerm)
//pesquisa do termo selecionado
const wikipediaContent = wikipediaResponde.get()
//extração do conteudo retornado
console.log(wikipediaContent)
    }
}
module.exports = robot