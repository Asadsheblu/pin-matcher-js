//generete pin Number

document.getElementById('generate-btn').addEventListener('click',function(){
//create 5 rab=ndom number
        function getPin(){
            let pinNumber=Math.round(Math.random()*100000)
            let pin=pinNumber+""
            if(pin.length==5){
            return  pinNumber;
            }
            else{
                return getPin()
            }
        }
        let pin=getPin()
        document.getElementById('display-pin').value=pin

})

//

document.getElementById('keypad').addEventListener('click',function(event){

      const keyNumber=  event.target.innerText;
      const displayInput=document.getElementById('display-Input')
      if(isNaN(keyNumber)) {
        if(keyNumber=='C'){
            displayInput.value=''
        }
    } 
        else{
            const userDisplayInput=displayInput.value;
            const newNumber=userDisplayInput+keyNumber
            displayInput.value=newNumber
            
      
        }


})
//submit
document.getElementById('submit-btn').addEventListener('click',function(){
    let pin=document.getElementById('display-pin').value ;
    let displayNumber=document.getElementById('display-Input').value ;
   let right=document.getElementById('rightInput')
   let wrong=document.getElementById('wrongInput')
   if(pin=="" || displayNumber==''){
    right.style.display='none'
    wrong.style.display='block'
   }

   else if(pin==displayNumber){
      right.style.display='block'
      wrong.style.display='none'
    }
    else{
        right.style.display='none'
       wrong.style.display='block'
      let lefttry= document.getElementById('try')
      lefttry.innerText= parseFloat( lefttry.innerText)-1
      if(lefttry.innerText<0){
         lefttry.innerText=''
         alert('please refresh')
      }
    }
})