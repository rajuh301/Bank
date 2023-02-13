function inputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueStr = inputField.value;
    const convertNum = parseFloat(inputFieldValueStr);
    inputField.value = '';
    return convertNum;
}
function inputValueFromText(inputIds){
    const inputText = document.getElementById(inputIds);
    const inputTextStr = inputText.innerText;
    const inputConvert = parseFloat(inputTextStr);
    return inputConvert;
}


// ---------------------------------------- 

document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = inputFieldValueById('withdeaw-field');

    const withdeawText = inputValueFromText('withdraw-total');

    const mainBlance = inputValueFromText('balance-total');
    const mainBlanceMinus = mainBlance - withdrawField;


    if(mainBlance < withdrawField ){
        alert('Your Blanch is low');
        return;
    }
  

    
    document.getElementById('balance-total').innerText = mainBlanceMinus;

    const withdeawTotal = withdeawText + withdrawField;

    document.getElementById('withdraw-total').innerText = withdeawTotal;
    





})
