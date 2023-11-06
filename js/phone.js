document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    
    updatePhonePrice(newPhoneNumber);

    // Sub Total
    calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);

    // Sub Total
    calculateSubTotal();
})