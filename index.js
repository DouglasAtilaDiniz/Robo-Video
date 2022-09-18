const readline = require('readline-sync')
function start(){
  const content = {}
  content.searchTerm = askAndReturnSearchTerm()
 content.prefix = askAndReturnPrefix()
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