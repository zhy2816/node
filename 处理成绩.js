const fs = require('fs')

fs.readFile(__dirname + '/files/成绩.txt', 'utf8', function(err, dataStr){
    if(err) return console.log('读取文件失败:' + err.message)
    //console.log('读取文件成功，内容是' + dataStr)
    let arr = dataStr.split(' ')

    let newArr = []
        arr.forEach(item => {
            if(item.length > 0){
            let newScore = item.replace('=', '：')
            newArr.push(newScore)
        }
    })

    fs.writeFile(__dirname + '/files/成绩-ok.txt', newArr.join('\n'), (err) => {
        if (err) return console.log('写入文件失败：' + err.message)
        console.log('处理成绩成功！')
    })
})