// creating own promise
const cart=["shoes","pants","kurta"];
createOrders(cart)//API FIRST
.then(function(orderId){//output function foe dispalying the conentent
    console.log(orderId);
    return orderId;//return orderid to new function
})
.catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
   return paymentStatus(orderId);//return and making new API paymentstatus with orderid as input
})
.then(function(paymentInfo){//output function for displaying
    console.log(paymentInfo);
    return paymentInfo;//return payment info to new function
})
.catch(function(err){
    console.log(err.message);
})
.then(function(paymentInfo){
    return summary(paymentInfo);//return and making new API order summary with payment info as input
})
.then(function(bill){//outputfunction for display
    console.log(bill);
    return bill;
})

function createOrders(cart){
    return new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err=new Error("the cart is empty");
            reject(err);
        }
        if(validateCart(cart)){
             const orderId ="8848484";
             setTimeout(function(){
                resolve(orderId);
             },1000);
        }
    })
}
function validateCart(cart){
    return true;
}
function paymentStatus(orderId){
    return new Promise(function(resolve,reject){
        if(!paymentValid(orderId)){
            const err= new Error("payment failed");
            reject(err);
        }
        if(paymentValid(orderId)){
            const paymentInfo = "pay500phoepe";
            resolve(paymentInfo);
        }
    })
}
function paymentValid(orderId){
    return true;
}
function summary(paymentInfo){
    return new Promise(function(resolve,reject){
        const bill="order placed succesfully";
        resolve(bill);
    });
}
