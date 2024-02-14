// structure of an async function
// async function test(){
//     return 'Hello';
// }
// console.log(test());

const paymentStatus = true;
const marks = 90;
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
async function course(){
    // await enroll();
    // await progress();
    // const msg = await getCertificate();
    // console.log(msg);

    try{
        await enroll();
        await progress();
        const msg = await getCertificate();
        console.log(msg);
    }catch(err){
        console.log(err);
    }
}
course();