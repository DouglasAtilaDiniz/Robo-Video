const readline = require('readline-sync')
const robots = {
  text: require('./robots/text.js')
}
async function start(){
  const content = {}
  content.searchTerm = askAndReturnSearchTerm()
 content.prefix = askAndReturnPrefix()

 await robots.text(content) 

  function askAndReturnSearchTerm() {
     return readline.question('Type a Winkipedia search term:')
  }

  function askAndReturnPrefix(){
const prefixes = ['Who is', 'What is', 'The History of']
const selectedPrefixesIndex = readline.keyInSelect(prefixes,'Chose on Opition')
const selectedPrefixText = prefixes[selectedPrefixesIndex]
return selectedPrefixText
}
  console.log(content)

}
start()