// basic structure of a promise
// const _status = false;
// console.log('Task 1');
// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if(_status){
//             resolve('Task 2');
//         }else{
//             reject('There is an error');
//         }
//     },2000);
// });
// promise
//     .then(function(val){
//         console.log(val);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// console.log('Task 3');

function enroll(){
    console.log('Course enrollment is i progress...');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentStatus){
                resolve();
            }else{
                reject('Payment not succeed');
            }
        },2000);
    });
    return promise;
}
function progress(){
    console.log('Course is in progress...');
    const progress = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },1000);
    });
    return progress;
}
function getCertificate(){
    const getCertificate = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve('Congrats! You got the cerftificate!');
            }else{
                reject('Sorry! You did not get enough marks to get the certificate!');
            }
        },1000);
    });
    return getCertificate;
}
enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(val){
        console.log(val);
    })
    .catch(function(err){
        console.log(err);
    });