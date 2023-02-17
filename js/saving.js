document.getElementById('btn-calculate').addEventListener ('click',function(){
    // console.log('calculate button click');

    // income Field 
    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const incomeFieldNumber = parseInt(incomeFieldString);

    if(isNaN(incomeFieldNumber)){
        alert('Please provide a valid number');
        return;
    }
    
    // food Field
    const foodField = document.getElementById('food-field');
    const foodFieldString = foodField.value;
    const foodFieldNumber = parseInt(foodFieldString);

    if(isNaN(foodFieldNumber)){
        alert('Please provide a valid number');
        return;
    }

    // rent Field
    const rentField = document.getElementById('rent-field');
    const rentFieldString = rentField.value;
    const rentFieldNumber = parseInt(rentFieldString);

    if(isNaN(rentFieldNumber)){
        alert('Please provide a valid number');
        return;
    }

    // Clothes Field 
    const clothesField = document.getElementById('clothes-field');
    const clothesFieldString = clothesField.value;
    const clothesFieldNumber = parseInt(clothesFieldString);

    if(isNaN(clothesFieldNumber)){
        alert('Please provide a valid number');
        return;
    }

    // calculate
    const totalCost = foodFieldNumber + rentFieldNumber + clothesFieldNumber;
    
    // Total Expenses Element
    const totalExpensesElement = document.getElementById('total-expenses');
    // const totalExpensesElementString = totalExpensesElement.innerText;
    // const totalExpenses = parseInt(totalExpensesElementString);
    totalExpensesElement.innerText = totalCost;

    // Balance Element
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalance = incomeFieldNumber - totalCost;
    totalBalanceElement.innerText = totalBalance;
})

document.getElementById('btn-save').addEventListener('click', function(){
    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const incomeFieldNumber = parseInt(incomeFieldString);

    // saving-percentage
    const percentageField = document.getElementById('percentage-field');
    const percentageFieldString = percentageField.value;
    const percentageFieldNumber = parseInt(percentageFieldString);

    const percentage = (percentageFieldNumber * incomeFieldNumber) / 100;

    if(isNaN(percentage)){
        alert('Please provide a valid number');
        return;
    }

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = percentage;

    // Remaining Balance
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText
    const totalBalance = parseInt(totalBalanceString);

    const remainingBalanceElement = document.getElementById('remaining-balance');
    const remainingBalance = totalBalance - percentage;
    remainingBalanceElement.innerText = remainingBalance;

})