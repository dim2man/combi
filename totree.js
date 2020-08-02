const fs = require('fs');
// const letters='абвгдежзийклмнопрстуфхцчщшъыьэюя';
// let words=fs.readFileSync('RUS.txt',{encoding:'utf-8'})
// 	.split('\n');
// words = words
// 	.map(w=>w.trim())
// 	.map(w=>w.replace(/ё/g,'е'))
// 	.filter(w=>w.split('').every(l=>letters.includes(l)));
// words.sort((a,b)=>a.localeCompare(b, 'ru-ru'));
// fs.writeFileSync('rus2.json', JSON.stringify(words), {encoding:'utf-8'});
const words = require('./rus2.json');
const voc = words.reduce((a, w) => {
	let o = a;
	w.split('').forEach(l => {
		if (!o[l]) o[l] = {};
		o = o[l];
	});
	o['_']=1;
	return a;
}, {});
fs.writeFileSync('voc.json', JSON.stringify(voc), {encoding:'utf-8'});
