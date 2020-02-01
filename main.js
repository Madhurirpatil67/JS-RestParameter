let numArray=[1,2,3,4,5,6,7,8,9];

function displayArray(numArray)
{
    numArray.forEach(element => {
        console.log(element);
    });
}

displayArray(numArray);

//Rest Parameter using ... dots
function restArray(numvalue,...numArray) 
{
   console.log("numvalue:",numvalue);
   numArray.forEach(element=>console.log(element));
}
restArray(1,2,3,4,5,6,7,8,9,"hello","true");