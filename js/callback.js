// Why we need callback
// function myDisplayer(some){
//     document.querySelector('#demo').innerHTML = some;
// }
// function myCalculator(num1, num2, callback){
//     let sum = num1 + num2;
//     if(callback) callback(sum);
// }
// myCalculator(5, 5, function(some){
//     console.log(some);
// });

const paymentStatus = true;
const marks = 90;
function enroll(callback){
    console.log('Enrollment  is in progress...');
    setTimeout(function(){
        if(paymentStatus){
            callback();
        }else{
            console.log('Payment not succeed');
        }
    },2000);
}
function progress(callback){
    console.log('Course is in progress...');
    setTimeout(function(){
        callback();
    },1000);
}
function getCertificate(){
    setTimeout(function(){
        if(marks >= 80){
            console.log('Congrats! You got the certificate!');
        }else{
            console.log('Sorry! You did not get enugh marks to get the certificate!');
        }
    },1000);
}
enroll(function(){
    progress(getCertificate);
});

// some confusion on function
// const a = function(){
    // console.log(10);
//     let x = 10;
// }
// console.log(test());
// console.log(a());










