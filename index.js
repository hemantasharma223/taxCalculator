

function tax(){
    let salary = document.getElementById("salary").value;
    let noOfMonths = document.getElementById("noOfMonths").value;
    let salaryAmount = salary * noOfMonths
    let tax1
    let totalTax

    if(salaryAmount >= 500000 && salaryAmount < 700000) {
        tax1 = (500000 * 1 /100 + (salaryAmount-500000) * 10 / 100)
        document.getElementById("output").innerHTML = tax1;
    }
    else if(salaryAmount>=700000 && salaryAmount < 1000000){
        tax1 = (500000 * 1 / 100) + (200000 * 10 / 100) + (salaryAmount-700000) * 20 / 100
        document.getElementById("output").innerHTML = tax1;
    }
    else if (salaryAmount >= 1000000 && salaryAmount < 2000000) {
        tax1 = (500000 * 1 / 100) + (200000 * 10 / 100) + (300000 * 10 / 100) + (salaryAmount-1000000) * 20 / 100
        document.getElementById("output").innerHTML = tax1;
    }
    else{
        tax1 = salaryAmount * 1 / 100
        document.getElementById("output").innerHTML = tax1;
    }
}