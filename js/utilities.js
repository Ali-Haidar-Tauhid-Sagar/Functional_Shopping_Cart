// Case Number

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if (isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    } 
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseElementTotal = document.getElementById('case-total');
    caseElementTotal.innerText = caseTotalPrice;
}


//Phone Number

function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phonNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phonNumberString);

    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber){
    const newPhoneTotalprice = newPhoneNumber * 1219;
    const phoneElementTotal = document.getElementById('phone-total');
    phoneElementTotal.innerText = newPhoneTotalprice;
}


//Case + Phone Total
function getTextElementValueById(elementId){
    const elementTotals = document.getElementById(elementId);
    const currentElementTotalString = elementTotals.innerText;
    const currentElementTotal = parseInt(currentElementTotalString);
    return currentElementTotal;
}

//Set sub total Element
function setTextElementValueById(elementId,value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}

//Case + Phone Sub Total
function calculateSubTotal(){
    // calculate Total
    const currentPhonetotal = getTextElementValueById('phone-total');
    const currentCasetotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhonetotal + currentCasetotal;

    setTextElementValueById('sub-total', currentSubTotal);

    // Tax Total
    const taxTotalAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxTotalAmount = parseFloat(taxTotalAmountString);
    setTextElementValueById('tax-amount', taxTotalAmount);

   // Final Total
   const finalTotalAmount = currentSubTotal + taxTotalAmount;
   setTextElementValueById('final-total', finalTotalAmount);

}