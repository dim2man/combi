const words = require('./voc.json');
const [_node,_file,word] = process.argv;
if(typeof word != 'string') {
	console.log('Usage: node checkword.js <word>');
	process.exit();
}
const res = Boolean(word.split('').reduce((acc, l) => acc[l] || {}, words)._);
console.log(`${word} is ${res ? 'a' : 'not a'} word`);
