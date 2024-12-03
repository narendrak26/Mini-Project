// let upperInput = document.getElementsById("upcase");
// let lowerInput = document.getElementsById("lwcase");
// let numberInput = document.getElementsById("numcase");
// let symbolInput = document.getElementsById("symcase");
// let generatedPass = document.getElementById("inp");
// let btn = document.getElementById("gen_btn");
// let passLenght = document.getElementById("lenght");
// let errBox = document.getElementById("err");

// let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lowerChar = "abcdefghijklmnopqrstuvwxyz";
// let numberChar = "1234567890";
// let symbolChar = "~!@#$%^&*()_+?/;";


// btn.addEventListener("click",()=>{
//     let expectedChar = '';
//     let randomPass = '';
//     expectedChar += upperInput.checked ? upperChar : '';
//     expectedChar += lowerInput.checked ? lowerChar : '';
//     expectedChar += numberInput.checked ? numberChar : '';
//     expectedChar += symbolInput.checked ? symbolChar : '';
//     let lenght = Number(passLenght.value);
//     if(expectedChar.length !=0){
//         if(lenght>=5 && lenght<=30){
//             for(let i = 0;i<lenght;i++){
//                 let index = Math.floor(Math.random()*(expectedChar.length));
//                 randomPass+= expectedChar.at(index);
//             }
//             generatedPass.value = randomPass;
//             errBox.innerHTML = '';
//         }
//         else{
//             errBox.innerHTML= `<i>Enter the lenght between 5-30 </i>`;
//             generatedPass.value= `Loading ...`
//         }
       
//     }
//     else{
//         errBox.innerHTML= `<i>Please select atleast on field to generate the random password</i>`;
//         generatedPass.value= `Loading ...`

//     }
// });



let uppercase =document.getElementById('upcase');
let lowercase =document.getElementById('lwcase');
let numbers =document.getElementById('numcase');
let symbols =document.getElementById('symcase');
let generatedPass = document.getElementById('inp');
let btn = document.getElementById('gen_btn');
let passLength = document.getElementById('length');
let errBox = document.getElementById('err');

let uppercaseChar = 'ABCDEFGHIJKLMONPQRST';
let lowercaseChar = 'abcdefghijklmnopqrst';
let numChar = '1234567890';
let symChar = '~`!@#$%^&*()_-+=:?/{}[]<>,.';

btn.addEventListener('click',()=>{
    let expectedChar ='';
    let randomPass = '';
    expectedChar += uppercase.checked ? uppercaseChar : '';
    expectedChar += lowercase.checked ? lowercaseChar : '';
    expectedChar += numbers.checked ? numChar : '';
    expectedChar += symbols.checked ? symChar : '';
    let length = Number(passLength.value);
    if(expectedChar.length != 0){
        if(length>=5 && length<31){
            for(let i = 0;i<length;i++){
                let index = Math.trunc(Math.random() * (expectedChar.length));
                randomPass += expectedChar.at(index);
            }
            generatedPass.value = randomPass;
            errBox.innerHTML = '';
        }
        else{
            errBox.innerHTML = `<i>Enter the length b/w 5-30</i>`
            generatedPass.value = 'Loading ...';
        }
    }
    else{
        errBox.innerHTML = `<i>Please select at least one field for generating random password</i>`;
        generatedPass.value = 'Loading ...';
    }
    
});