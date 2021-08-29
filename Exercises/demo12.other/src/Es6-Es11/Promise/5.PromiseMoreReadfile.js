// 前置步骤同2

//1.引入fs模块
const fs =require('fs');

// 回调地狱使用方式
// fs.readFile('./PromiseMoreFile1.md',(err,data1)=>{
//     fs.readFile('./PromiseMoreFile2.md',(err,data2)=>{
//         fs.readFile('./PromiseMoreFile3.md',(err,data3)=>{
//             let result =data1 + '\r\n' + data2 + '\r\n' + data3;
//             console.log(result);
//         });
//     });
// })

//3.使用Promise封装
const p=new Promise(function(resolve,reject){
    fs.readFile('./PromiseMoreFile1.md',(err,data)=>{
        resolve(data);
    });
})
p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./PromiseMoreFile2.md',(err,data)=>{
            resolve([value,data]);
        });
    })
}).then(value =>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./PromiseMoreFile3.md',(err,data)=>{
            value.push(data)
            resolve(value);
        });
    }) 
}).then(value =>{
    console.log(value.join('\r\n'));
})

// // //2.调用方法读取文件
// // fs.readFile('./Promise.md',(err,data)=>{
// //     // 如果失败，则抛出错误
// //     if(err) throw err;
// //     // 如果没有出错，则输出内容
// //     console.log(data);
// //     console.log(data.toString());
// // })

// //3.使用Promise封装
// const p=new Promise(function(resolve,reject){
//     fs.readFile('./Promise.md',(err,data)=>{
//         // 如果失败，则抛出错误
//         if(err) reject(err);
//         // 如果没有出错，则输出内容
//         resolve(data);
//     });
// })
// p.then(function (value) {
//     console.log(value.toString());
// },function (reject) {
//     console.log('读取失败！');
// })