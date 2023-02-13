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


document.getElementById('btn-deposit').addEventListener('click', function (){

    const inputValue = inputFieldValueById('deposit-field');

    const depositDisplay = inputValueFromText('deposit-total')
    
    const blanceTotal = inputValueFromText('balance-total');

    const blanceTotalSHow = blanceTotal +inputValue;
    document.getElementById('balance-total').innerText = blanceTotalSHow;


    const total = depositDisplay + inputValue;

    document.getElementById('deposit-total').innerText = total;

    




  





})