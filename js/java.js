function getInputValueById(fieldId){
    const getField = document.getElementById(fieldId);
    const fieldValue = getField.value;
    getField.value = '';
    // const fieldValue = parseFloat(fieldValueString);
    return fieldValue;
}
function getTextValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue =  parseFloat(elementValueString);
    return elementValue;
}
function setValueById (elementId, newValue){
    const getElement = document.getElementById(elementId);
    getElement.innerText = newValue;
}

document.getElementById('apply').addEventListener('click',function(){
    console.log('apply btn clicked')
    const newFieldValue = getInputValueById('field');
    if(newFieldValue === 'DOM'){
        const previousAmount = getTextValueById('amount');
        const discountAmount = previousAmount * (30/100);
        const newAmount = previousAmount - discountAmount;
        
        setValueById('amount',newAmount);
        document.getElementById('apply').setAttribute('disabled',true)
    }
    else{
        document.getElementById('apply').setAttribute('disabled',true)
    }
})