const form = document.getElementById('form');
const salary = document.getElementById("salary");
const noOfMonths = document.getElementById("noOfMonths");
const securityFund = document.getElementById("securityFund");
const emplProvFund = document.getElementById("emplProvFund");
const chitInvTrust = document.getElementById("chitInvTrust");
const bonus = document.getElementById("bonus");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const salaryAmount = salary.value;
    localStorage.setItem('salaryAmount',salaryAmount);
    const months = noOfMonths.value;
    localStorage.setItem('noOfMonths',months);
    const securityFundVal = securityFund.value;
    localStorage.setItem('securityFund',securityFundVal);
    const emplProvFundVal = emplProvFund.value;
    localStorage.setItem('emplProvFund',emplProvFundVal);
    const chitInvTrustVal = chitInvTrust.value;
    localStorage.setItem('chitInvTrust',chitInvTrustVal);
    const bonusVal = bonus.value;
    localStorage.setItem('bonus',bonusVal);


    window.location.href = "output.html"
})