//需要安装node环境，用node -v查看版本信息
//切换目录后再执行node 文件名

//1.引入fs模块
const fs =require('fs')

// //2.调用方法读取文件
// fs.readFile('./Promise.md',(err,data)=>{
//     // 如果失败，则抛出错误
//     if(err) throw err;
//     // 如果没有出错，则输出内容
//     console.log(data);
//     console.log(data.toString());
// })

//3.使用Promise封装
const p=new Promise(function(resolve,reject){
    fs.readFile('./Promise.md',(err,data)=>{
        // 如果失败，则抛出错误
        if(err) reject(err);
        // 如果没有出错，则输出内容
        resolve(data);
    });
})
p.then(function (value) {
    console.log(value.toString());
},function (reject) {
    console.log('读取失败！');
})