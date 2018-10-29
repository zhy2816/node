const fs = require('fs')

fs.appendFile('./files/text.txt', '333', err => {
	if(err) return console.log('追加文件失败:' + err.message)
	console.log('追加文件成功')
})