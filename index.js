const readLine = require('readline-sync');
const robot = require('./robots/text.js');
const robots = {
  //  userInput: require('./robots/user-input.js')
   text: require('./robots/text.js')
}

async function start() {

  const content = {
    maximumSentences : 7
  }

  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();

  // robots.userInput(content)
  await robots.text(content);

  function askAndReturnSearchTerm() {
    return readLine.question('Type a Wikipedia search term: ');
  } 

  function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is','The History of'];
    const selectedPrefixIndex = readLine.keyInSelect(prefixes);
    const selectedPrefixText = prefixes[selectedPrefixIndex];

    return selectedPrefixText;
  }
  console.log(JSON.stringify(content, null, 4));  
}

start();