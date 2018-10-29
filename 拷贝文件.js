const fs = require('fs')
let str = '晴天'
let tq = '今天是${str}'

fs.copyFile('./files/1.txt', './files/1.copy.txt', err => {
	if(err) return console.log('拷贝失败:' + err.message)
	console.log('拷贝成功${str}')
})