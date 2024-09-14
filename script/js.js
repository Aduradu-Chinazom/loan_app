function validate(){
    let account_balance = parseInt(document.getElementById("input1").value);
    let loan_amount = parseInt(document.getElementById("input2").value);
    let credit_history = document.getElementById("input3").value;
    let deposit_history = document.getElementById("input4").value;
    let loan_history = document.getElementById("input5").value;
    let pay_back = document.getElementById("input6").value;
    let account_type = document.getElementById("input7").value;

    let aErr = document.getElementById("aErr");
    let bErr = document.getElementById("bErr");
    let cErr = document.getElementById("cErr");
    let dErr = document.getElementById("dErr");
    let eErr = document.getElementById("eErr");
    let fErr = document.getElementById("fErr");
    let gErr = document.getElementById("gErr");

    let valid = true;

    if (isNaN(account_balance)) {
        aErr.innerHTML = "Account balance cannot be blank";
        valid = false;
    } else {
        aErr.innerHTML = "";
    }

    if (isNaN(loan_amount)) {
        bErr.innerHTML = "Loan amount cannot be blank";
        valid = false;
    } else {
        bErr.innerHTML = "";
    }

    if (credit_history === "") {
        cErr.innerHTML = "Please select an option";
        valid = false;
    } else {
        cErr.innerHTML = "";
    }

    if (deposit_history === "") {
        dErr.innerHTML = "Please select an option";
        valid = false;
    } else {
        dErr.innerHTML = "";
    }

    if (loan_history === "") {
        eErr.innerHTML = "Please select an option";
        valid = false;
    } else {
        eErr.innerHTML = "";
    }

    if (pay_back === "") {
        fErr.innerHTML = "Please select an option";
        valid = false;
    } else {
        fErr.innerHTML = "";
    }

    if (account_type === "") {
        gErr.innerHTML = "Please select an option";
        valid = false;
    } else {
        gErr.innerHTML = "";
    }

    return valid;
}

document.getElementById("submit").addEventListener("click", function(e){
    if (!validate()){
        e.preventDefault();
    } else {
        let account_balance = parseInt(document.getElementById("input1").value);
        let loan_amount = parseInt(document.getElementById("input2").value);
        let credit_history = document.getElementById("input3").value;
        let deposit_history = document.getElementById("input4").value;
        let loan_history = document.getElementById("input5").value;
        let pay_back = document.getElementById("input6").value;
        let account_type = document.getElementById("input7").value;
        
        let points = 0;
        
        function condition1() {
            if (account_balance >= loan_amount) {
                points += 10;
            } else {
                points -= 10;
            }
            return points;
        }
        
        function condition2() {
            if (credit_history === "1 month ago" || 
                credit_history === "2 months ago" || 
                credit_history === "3 months ago") {
                points -= 0;
            } else {
                points += 10;
            }
            return points;
        }
        
        function condition3() {
            if (deposit_history === "Within the last 15 days" || 
                deposit_history === "Within the last 25 days") {
                points += 10;
            } else {
                points -= 0;
            }
            return points;
        }
        
        function condition4() {
            if (loan_history === "Within the last 2 months" || 
                loan_history === "Within the last 4 months" || 
                loan_history === "Within the last 6 months") {
                points -= 0;
            } else {
                points += 10;
            }
            return points;
        }
        
        function condition5() {
            if (pay_back === "In the next 2 months" || 
                pay_back === "In the next 5 months") {
                points += 10;
            } else {
                points -= 0;
            }
            return points;
        }
        
        function condition6() {
            if (account_type === "Savings") {
                points += 5;
            } else {
                points += 10;
            }
            return points;
        }
        
        condition1();
        condition2();
        condition3();
        condition4();
        condition5();
        condition6();
        
        console.log("Total Points: " + points);
        let success = document.getElementById("success");
        if(points >= 30){
            success.innerHTML = "Congratulations You've been awarded your requested loan";
        } else {
            success.innerHTML = "Unfortunately your requested loan cannot be approved";
        }
    }
});




