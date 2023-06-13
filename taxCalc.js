
const salary = localStorage.getItem('salaryAmount');
const noOfMonths = localStorage.getItem('noOfMonths');
const emplProvFund = localStorage.getItem('emplProvFund');
const securityFund = localStorage.getItem('securityFund');
const chitInvTrust = localStorage.getItem('chitInvTrust');
const bonusAmnt = localStorage.getItem('bonus');

if (securityFund <=0){
    let totalDeductionAmnt = Number(securityFund) + Number(emplProvFund) + Number(chitInvTrust)
    let tempAmnt1 = Number(salary) * Number(noOfMonths) + Number(bonusAmnt)
    let salaryAmount = Number(tempAmnt1) - Number(totalDeductionAmnt)
    let tax1
    let totalTax

    document.getElementById("totalAmnt").innerHTML = tempAmnt1;
    document.getElementById("totalDeductionAmnt").innerHTML = totalDeductionAmnt;
    document.getElementById("totalTaxableAmnt").innerHTML = salaryAmount;
    if (salaryAmount < 500000){
        tax1 = salaryAmount * 1 / 100
        document.getElementById("output").innerHTML = tax1;
    }


    else if(salaryAmount >= 500000 && salaryAmount < 700000) {
        tax1 = (500000 * 1 /100 + (salaryAmount-500000) * 10 / 100)
        document.getElementById("output").innerHTML = tax1;
    }


    else if(salaryAmount>=700000 && salaryAmount < 1000000){
        tax1 = (500000 * 1 / 100) + (200000 * 10 / 100) + (salaryAmount-700000) * 20 / 100
        document.getElementById("output").innerHTML = tax1;
    }


    else if (salaryAmount >= 1000000 && salaryAmount < 2000000) {
        tax1 = (500000 * 1 / 100) + (200000 * 10 / 100) + (300000 * 20 / 100) + (salaryAmount-1000000) * 30 / 100
        document.getElementById("output").innerHTML = tax1;
    }


    else{
        let tempSalary = salaryAmount - 2000000
        tax1 = (500000 * 1 / 100) + (200000 * 10 / 100) + (300000 * 20 / 100) + (1000000 * 30 / 100) + tempSalary * 36 / 100
        document.getElementById("output").innerHTML = tax1;
    }

    function mainPage() {
        window.location.href = "index.html"
    }
}

else{
    let totalDeductionAmnt = Number(securityFund) + Number(emplProvFund) + Number(chitInvTrust)
    let tempAmnt1 = Number(salary) * Number(noOfMonths) + Number(bonusAmnt)
    let salaryAmount = Number(tempAmnt1) - Number(totalDeductionAmnt)
    let taxableAmntTemp = Number(tempAmnt1) - Number(totalDeductionAmnt) - 500000
    let tax1
    let totalTax

    document.getElementById("totalAmnt").innerHTML = tempAmnt1;
    document.getElementById("totalDeductionAmnt").innerHTML = totalDeductionAmnt;
    document.getElementById("totalTaxableAmnt").innerHTML = taxableAmntTemp;

    if (salaryAmount < 500000){
        tax1 = (salaryAmount - 500000) * 10 / 100
        document.getElementById("output").innerHTML = tax1;
    }


    else if(salaryAmount >= 500000 && salaryAmount < 700000) {
        tax1 = (salaryAmount-500000) * 10 / 100
        document.getElementById("output").innerHTML = tax1;
    }


    else if(salaryAmount>=700000 && salaryAmount < 1000000){
        tax1 = (200000 * 10 / 100) + (salaryAmount-700000) * 20 / 100
        document.getElementById("output").innerHTML = tax1;
    }


    else if (salaryAmount >= 1000000 && salaryAmount < 2000000) {
        tax1 = (200000 * 10 / 100) + (300000 * 20 / 100) + (salaryAmount-1000000) * 30 / 100
        document.getElementById("output").innerHTML = tax1;
    }


    else{
        let tempSalary = salaryAmount - 2000000
        tax1 = (200000 * 10 / 100) + (300000 * 20 / 100) + (1000000 * 30 / 100) + tempSalary * 36 / 100
        document.getElementById("output").innerHTML = tax1;
    }

    function mainPage() {
        window.location.href = "index.html"
    }
}
