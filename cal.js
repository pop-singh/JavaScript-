let input=document.querySelector('input');
let btn=document.querySelectorAll('button');


for (const button of btn) {
    button.addEventListener('click',(e)=>
    {
      let text=e.target.innerText;
      //console.log(text);
      if(text=='C')
      {
        input.value='';
      }
      else if(text === '=')
      {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value='invalid';
            
        }
       
      }
      else{
        input.value=input.value+text;
      }

    })
    
}