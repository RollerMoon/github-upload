//
function dataFn(actionFn){
    let str1 = 233, str2 = 666;
    if(actionFn) actionFn(str1, str2); // 实参
}

dataFn(function(test1, test2){ // 形参
    console.log(test1, test2);
    console.log(test1 + test2);
})

//
function MidFn(dataFn){
    //储存值
    let data1 = '', data2 = '';
    
    //数据接收函数
    let sucData = function(data){
        data1 = data;
    },  falData = function(data){
        data2 = data;
    };
    if(dataFn) dataFn(sucData, falData);

    //操作接收函数
    this.action = function(sucFn, falFn){
        if(sucFn) sucFn(data1);
        if(falFn) falFn(data2);
        return this;
    }
}

let w = new MidFn(function(suc, fal){
    suc(233)
    fal(777)
});
w.action(function(a){

},
function(b){
    console.log(b);
}).action(function(a){
    console.log(a);
})

// console.log(w.action(function(a){
//     console.log(a);
// },
// function(b){
//     console.log(b);
// }));



