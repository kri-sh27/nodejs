const fs=require('fs');

// fs.readFile("./abc.txt",(error,data)=>{
//     if(error){
//         console.log("erroe");
//         console.log(error);
//     }
//     else{
//         console.log(data.toString());
//     }
// });


// let content="hi who is theeeeeere";
// fs.writeFile("new_file.txt",content,(err)=>{
//     if(err){
//         console.log(err);

//     }else
//     {
//         console.log("saved");
//     }
// });

// appendfiele

// fs.appendFile("./new_file.txt","abc.txt",(err)=>{
//     if(err){
//         console.log(err);

//     }else{
//         console.log("saved");
//     }
// })

fs.unlink("./new_file",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("deleted");
    }
})

// console.log("terminated");