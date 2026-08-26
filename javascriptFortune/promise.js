// let roseday = new Promise((resolve,reject)=>{
//     let roseavailable = true

//     if (roseavailable){
//         console.log("rose mil gaya , Promise accomplished")
//     }
//     else{
//         console.log("rose not found , promise rejected")
//     }
// })

// roseday
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((msg)=>{
//     console.log(msg);
// })
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 //Async Function
 //Async function is always retrun a promisw
 //if a value is returned that is not a promise , javascript automatically wraps it in a resolved promise
// const getinfo = async() =>{
//     let data = "sample Data";
//     return data;
// }
// getinfo().then(data => console.log(data))
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//Await
// the awit keyword is used to wait for the promise to resolve.
//Await makes the code wait until the promise returns a result.
const getinfo = async () =>{
    let data = await "Sample Data";
    console.log(data);

}
console.log("output 1");
getinfo()
console.log("output2");