document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCasePrice(newCaseNumber);

    // Sub Total
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    
    updateCasePrice(newCaseNumber);

    // Sub Total
    calculateSubTotal();
})
