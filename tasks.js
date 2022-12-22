
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {

  if (text === 'quit\n' || text === "exit\n") {
    quit();
  }
  else if (text === 'hello\n' || text.split(" ")[0] === 'hello') {
    hello(text);
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    showList(text);
  } else if (text.split(" ")[0] === "add") {
    add(text);
  }
  else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  if (text === "hello\n") {
    console.log("hello!");
    return
  }
  text = text.replace('\n', '').trim();
  const words = text.split(' ');
  if (words[0] === 'hello') {
    const argument = words.slice(1).join(' ');
    console.log(`hello ${argument}!`);
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}


/**
 * Listing all commands
 *
 * @returns {void}
 */
let allCommands = [`"hello" for saying hello!`, `"hello arg" for say hello arg!`, `"quit" or "exit" for close the command line`, `"help" for listing all commands`]

function help() {
  console.log("The commands are:\n");
  for (let i = 0; i < allCommands.length; i++) {
    console.log(allCommands[i]);
  }
}

let list = [];

function showList(text) {
  if(list.length === 0){
    console.log("There is no tasks to do");
  }
  for (let i = 0; i < list.length; i++) {
    console.log(`${i + 1}- ${list[i]}`);
  }
}
function add(text) {
  text = text.replace('\n', '').trim();
  const words = text.split(' ');
  if (words[0] === 'add') {
    const argument = words.slice(1).join(' ');
    list.push(argument);
  }
}



// The following line starts the application
startApp("Mahmoud Khodor")
