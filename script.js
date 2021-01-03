let lastOperand = 0;
let operation = null;
let a=1;

const inputWindow = document.getElementById('inputWindow');
const operWindow= document.getElementById('operations');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
})
document.getElementById('btn_dot').addEventListener('click',function(){
    inputWindow.value+='.';
})


const arr_num=document.querySelectorAll('.btn_num');
for (let i = 0; i < arr_num.length; i++) {
    arr_num[i].onclick = function(){
        if (inputWindow.value=='0'){
            inputWindow.value='';
        }
        if (inputWindow.value=='-0'){
            inputWindow.value='-';
        }       
        inputWindow.value+=this.innerHTML;
    };
  }
const arr_oper=document.querySelectorAll('.btn_oper');
for (let i = 0; i < arr_oper.length; i++) {
    arr_oper[i].onclick = function(){
     switch (this.innerHTML) {
         case '+':
             lastOperand=parseFloat(inputWindow.value);
             operation='sum'
             inputWindow.value=0;
             break;

         case '-':
            if (operation) 
                inputWindow.value='-'+ inputWindow.value;                
            else{
            lastOperand=parseFloat(inputWindow.value);
            operation='def'
            if(!lastOperand)
                lastOperand=0;
            inputWindow.value=0;
            }
            
            break;

         case '*':
            lastOperand=parseFloat(inputWindow.value);
            operation='mult'
            inputWindow.value=0;
            break;
        
         case '/':
            lastOperand=parseFloat(inputWindow.value);
            operation='div'
            inputWindow.value=0;
            break;
         case '√':
            lastOperand=parseFloat(inputWindow.value);
            const result=Math.sqrt(lastOperand);
            inputWindow.value=result;
            break;


         case '=':
             if(operation==='sum'){
                const result=lastOperand+parseFloat(inputWindow.value);
                operWindow.innerHTML+=(a++)+') '+(lastOperand)+'+'+(parseFloat(inputWindow.value))+'='+(result)+'\n';
                inputWindow.value=result;
             }
             if(operation==='def'){
                let result=lastOperand-parseFloat(inputWindow.value);
                operWindow.innerHTML+=(a++)+') '+(lastOperand)+'-'+(parseFloat(inputWindow.value))+'='+(result)+'\n';
                inputWindow.value=result;
             }
             if(operation==='mult'){
                const result=lastOperand*parseFloat(inputWindow.value);
                operWindow.innerHTML+=(a++)+') '+(lastOperand)+'*'+(parseFloat(inputWindow.value))+'='+(result)+'\n';
                inputWindow.value=result;
             }
             if(operation==='div'){
                const result=lastOperand/(parseFloat(inputWindow.value));
                operWindow.innerHTML+=(a++)+') '+(lastOperand)+'/'+(parseFloat(inputWindow.value))+'='+(result)+'\n';
                inputWindow.value=result;
             }

            lastOperand=0;
            operation=null;
             break;     
         default:
             break;
     }
    };
  }