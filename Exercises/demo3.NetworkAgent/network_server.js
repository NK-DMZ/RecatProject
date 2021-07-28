const express = require('express')
const app = express()
app.get('/students', (req, res) => {
    const stus = [{
            name: 'zs',
            age: 25
        },
        {
            name: 'ls',
            age: 28
        },
        {
            name: 'ww',
            age: 90
        },
    ]
    res.send(stus)
    debugger
})

app.listen(5000, (err) => {
    if (!err) console.log('服务器好咯！');
})

app.use((request,response,next)=>{
    console.log('请求来自于：',request.get('Host'));
})