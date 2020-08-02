// Code your solutions in this file



function writeCards(arr,name)
{
 const arr_new=[];
    for(let i=0; i<arr.length;i++){
        arr_new.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return arr_new;
}

function countDown(num){

while(num>=0){
    console.log(num);
    num--;
}
}