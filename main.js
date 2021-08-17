
    let num1=Math.floor(Math.random()*10+1)


    let num2=Math.floor(Math.random()*10+1);
    
    const value1=document.getElementById('value1').value=num1;
 
    const value2=document.getElementById('value2').value=num2;




const button=document.getElementById('button')


button.addEventListener('click',function(){
    let answer= value1+value2;
    console.log(answer)
    const result= document.getElementById('output')
    const givenAns=document.getElementById('ans').value


    if(givenAns=='')
    {
        result.innerText='Please Give me Your answer'
    }
    else{
        if(answer==givenAns)
    {
       result.innerText='Yahoooooooooo,Beautiful'
       result.style.backgroundColor='blue'

    }
    else{
        result.innerText='Noooooooooo,Try Again Please'
        result.style.backgroundColor='red'
    }

    }
})