function calculateHartman() {
    var settlementAmount = document.getElementById('settlementAmount').value;
    var feeAmount = settlementAmount * 0.25;
    var costsAmount = document.getElementById('costs').value;
    var netSettlement = settlementAmount - feeAmount - costsAmount;
    var dob = document.getElementById('dob').value;

    var birthday = new Date(dob);
    var today = new Date();
    var years = today.getFullYear() - birthday.getFullYear();

    // Reset birthday to the current year.
    birthday.setFullYear(today.getFullYear());

    // If the user's birthday has not occurred yet this year, subtract 1.
    if (today < birthday) {
        years--;
    }
    // declares variables for lifeExpectancy, lifeExpectancyMale, and lifeExpectancyFemale
    var lifeExpectancy;
    var lifeExpectancyMale;
    var lifeExpectancyFemale;

    switch (years) {
        case 21:
            lifeExpectancyMale = 56.16;
            break;
        case 22:
            lifeExpectancyMale = 55.22;
            break;
        case 23:
            lifeExpectancyMale = 54.30;
            break;
        case 24:
            lifeExpectancyMale = 53.37;
            break;
        case 25:
            lifeExpectancyMale = 52.44;
            break;
        case 26:
            lifeExpectancyMale = 51.51;
            break;
        case 27:
            lifeExpectancyMale = 50.58;
            break;
        case 28:
            lifeExpectancyMale = 49.65;
            break;
        case 29:
            lifeExpectancyMale = 48.71;
            break;
        case 30:
            lifeExpectancyMale = 47.78;
            break;
        case 31:
            lifeExpectancyMale = 46.85;
            break;
        case 32:
            lifeExpectancyMale = 45.92;
            break;
        case 33:
            lifeExpectancyMale = 44.98;
            break;
        case 34:
            lifeExpectancyMale = 44.05;
            break;
        case 35:
            lifeExpectancyMale = 43.12;
            break;
        case 36:
            lifeExpectancyMale = 42.18;
            break;
        case 37:
            lifeExpectancyMale = 41.25;
            break;
        case 38:
            lifeExpectancyMale = 40.33;
            break;
        case 39:
            lifeExpectancyMale = 39.40;
            break;
        case 40:
            lifeExpectancyMale = 38.47;
            break;
        case 41:
            lifeExpectancyMale = 37.55;
            break;
        case 42:
            lifeExpectancyMale = 36.63;
            break;
        case 43:
            lifeExpectancyMale = 35.72;
            break;
        case 44:
            lifeExpectancyMale = 34.82;
            break;
        case 45:
            lifeExpectancyMale = 33.92;
            break;
        case 46:
            lifeExpectancyMale = 33.03;
            break;
        case 47:
            lifeExpectancyMale = 32.15;
            break;
        case 48:
            lifeExpectancyMale = 31.27;
            break;
        case 49:
            lifeExpectancyMale = 30.41;
            break;
        case 50:
            lifeExpectancyMale = 29.55;
            break;
        case 51:
            lifeExpectancyMale = 28.70;
            break;
        case 52:
            lifeExpectancyMale = 27.86;
            break;
        case 53:
            lifeExpectancyMale = 27.03;
            break;
        case 54:
            lifeExpectancyMale = 26.21;
            break;
        case 55:
            lifeExpectancyMale = 25.39;
            break;
        case 56:
            lifeExpectancyMale = 24.59;
            break;
        case 57:
            lifeExpectancyMale = 23.79;
            break;
        case 58:
            lifeExpectancyMale = 23.01;
            break;
        case 59:
            lifeExpectancyMale = 22.23;
            break;
        case 60:
            lifeExpectancyMale = 21.46;
            break;
        case 61:
            lifeExpectancyMale = 20.69;
            break;
        case 62:
            lifeExpectancyMale = 19.93;
            break;
        case 63:
            lifeExpectancyMale = 19.18;
            break;
        case 64:
            lifeExpectancyMale = 18.44;
            break;
        case 65:
            lifeExpectancyMale = 17.70;
            break;
        case 66:
            lifeExpectancyMale = 16.98;
            break;
        case 67:
            lifeExpectancyMale = 16.27;
            break;
        case 68:
            lifeExpectancyMale = 15.57;
            break;
        case 69:
            lifeExpectancyMale = 14.88;
            break;
        case 70:
            lifeExpectancyMale = 14.20;
            break;
        case 71:
            lifeExpectancyMale = 13.53;
            break;
        case 72:
            lifeExpectancyMale = 12.88;
            break;
        case 73:
            lifeExpectancyMale = 12.23;
            break;
        case 74:
            lifeExpectancyMale = 11.61;
            break;
        case 75:
            lifeExpectancyMale = 11.00;
            break;
        case 76:
            lifeExpectancyMale = 10.40;
            break;
        case 77:
            lifeExpectancyMale = 9.82;
            break;
        case 78:
            lifeExpectancyMale = 9.25;
            break;
        case 79:
            lifeExpectancyMale = 8.71;
            break;
        case 80:
            lifeExpectancyMale = 8.18;
            break;
        case 81:
            lifeExpectancyMale = 7.67;
            break;
    }

    switch (years) {
        case 21:
            lifeExpectancyFemale = 60.76;
            break;
        case 22:
            lifeExpectancyFemale = 59.79;
            break;
        case 23:
            lifeExpectancyFemale = 58.81;
            break;
        case 24:
            lifeExpectancyFemale = 57.84;
            break;
        case 25:
            lifeExpectancyFemale = 56.87;
            break;
        case 26:
            lifeExpectancyFemale = 55.90;
            break;
        case 27:
            lifeExpectancyFemale = 54.93;
            break;
        case 28:
            lifeExpectancyFemale = 53.96;
            break;
        case 29:
            lifeExpectancyFemale = 52.99;
            break;
        case 30:
            lifeExpectancyFemale = 52.02;
            break;
        case 31:
            lifeExpectancyFemale = 51.05;
            break;
        case 32:
            lifeExpectancyFemale = 50.09;
            break;
        case 33:
            lifeExpectancyFemale = 49.12;
            break;
        case 34:
            lifeExpectancyFemale = 48.16;
            break;
        case 35:
            lifeExpectancyFemale = 47.20;
            break;
        case 36:
            lifeExpectancyFemale = 46.24;
            break;
        case 37:
            lifeExpectancyFemale = 45.29;
            break;
        case 38:
            lifeExpectancyFemale = 44.33;
            break;
        case 39:
            lifeExpectancyFemale = 43.38;
            break;
        case 40:
            lifeExpectancyFemale = 42.43;
            break;
        case 41:
            lifeExpectancyFemale = 41.48;
            break;
        case 42:
            lifeExpectancyFemale = 40.54;
            break;
        case 43:
            lifeExpectancyFemale = 39.60;
            break;
        case 44:
            lifeExpectancyFemale = 38.67;
            break;
        case 45:
            lifeExpectancyFemale = 37.74;
            break;
        case 46:
            lifeExpectancyFemale = 36.81;
            break;
        case 47:
            lifeExpectancyFemale = 35.90;
            break;
        case 48:
            lifeExpectancyFemale = 34.98;
            break;
        case 49:
            lifeExpectancyFemale = 34.08;
            break;
        case 50:
            lifeExpectancyFemale = 33.17;
            break;
        case 51:
            lifeExpectancyFemale = 32.28;
            break;
        case 52:
            lifeExpectancyFemale = 31.39;
            break;
        case 53:
            lifeExpectancyFemale = 30.51;
            break;
        case 54:
            lifeExpectancyFemale = 29.63;
            break;
        case 55:
            lifeExpectancyFemale = 28.75;
            break;
        case 56:
            lifeExpectancyFemale = 27.88;
            break;
        case 57:
            lifeExpectancyFemale = 27.01;
            break;
        case 58:
            lifeExpectancyFemale = 26.15;
            break;
        case 59:
            lifeExpectancyFemale = 25.30;
            break;
        case 60:
            lifeExpectancyFemale = 24.45;
            break;
        case 61:
            lifeExpectancyFemale = 23.61;
            break;
        case 62:
            lifeExpectancyFemale = 22.78;
            break;
        case 63:
            lifeExpectancyFemale = 21.95;
            break;
        case 64:
            lifeExpectancyFemale = 21.13;
            break;
        case 65:
            lifeExpectancyFemale = 20.33;
            break;
        case 66:
            lifeExpectancyFemale = 19.53;
            break;
        case 67:
            lifeExpectancyFemale = 18.74;
            break;
        case 68:
            lifeExpectancyFemale = 17.97;
            break;
        case 69:
            lifeExpectancyFemale = 17.21;
            break;
        case 70:
            lifeExpectancyFemale = 16.45;
            break;
        case 71:
            lifeExpectancyFemale = 15.71;
            break;
        case 72:
            lifeExpectancyFemale = 14.98;
            break;
        case 73:
            lifeExpectancyFemale = 14.26;
            break;
        case 74:
            lifeExpectancyFemale = 13.56;
            break;
        case 75:
            lifeExpectancyFemale = 12.87;
            break;
        case 76:
            lifeExpectancyFemale = 12.20;
            break;
        case 77:
            lifeExpectancyFemale = 11.54;
            break;
        case 78:
            lifeExpectancyFemale = 10.90;
            break;
        case 79:
            lifeExpectancyFemale = 10.28;
            break;
        case 80:
            lifeExpectancyFemale = 9.67;
            break;
        case 81:
            lifeExpectancyFemale = 9.08;
            break;
    }
    // set life expectancy value depending on whether claimant is mail or female
    if (document.getElementById("male").checked === true) {
        lifeExpectancy = lifeExpectancyMale;
    } else {
        lifeExpectancy = lifeExpectancyFemale;
    }
    // set variables for determining claimant's liffe expectancy in weeks and months
    var lifeExpectancyMonths = lifeExpectancy * 12;
    var lifeExpectancyWeeks = lifeExpectancy * 52;
    var proRatedSettlementMonths = netSettlement / lifeExpectancyMonths;
    var proRatedSettlementWeeks = netSettlement / lifeExpectancyWeeks;

    // set HTML of "Results" section to correspond to gross settlement amount, net settlement amount, life expectancy (years), life expectancy (months), life expectancy (weeks)

    var settlementAmountHartman = settlementAmount;
    document.getElementById("settlementAmountHartman").innerHTML = parseFloat(settlementAmountHartman).toFixed(2);

    var netSettlementHartman = netSettlement;
    document.getElementById("netSettlementHartman").innerHTML = parseFloat(netSettlementHartman).toFixed(2);

    var leYearsHartman = leYears;
    document.getElementById("leYearsHartman").innerHTML = lifeExpectancy.toFixed(2);

    var leMonthsHartman = leYears;
    document.getElementById("leMonthsHartman").innerHTML = lifeExpectancyMonths.toFixed(2);

    var leWeeksHartman = lifeExpectancyWeeks;
    document.getElementById("leWeeksHartman").innerHTML = lifeExpectancyWeeks.toFixed(2);

    var dobHartman = dob;
    document.getElementById('dobHartman').innerHTML = dobHartman;

    var proRatedSettlementMonthsHartman = proRatedSettlementMonths;
    document.getElementById('proRatedSettlementMonthsHartman').innerHTML = proRatedSettlementMonthsHartman.toFixed(2);

    var proRatedSettlementWeeksHartman = proRatedSettlementWeeks;
    document.getElementById('proRatedSettlementWeeksHartman').innerHTML = proRatedSettlementWeeksHartman.toFixed(2);



    document.getElementById('amountOfFee').innerHTML = "$" + parseFloat(feeAmount.toFixed(2)).toLocaleString();
    document.getElementById('netSettlement').innerHTML = "$" + parseFloat(netSettlement.toFixed(2)).toLocaleString();
    document.getElementById('age').innerHTML = parseFloat(years.toFixed(2));
    document.getElementById('leYears').innerHTML = parseFloat(lifeExpectancy.toFixed(2));
    document.getElementById('leMonths').innerHTML = parseFloat(lifeExpectancyMonths.toFixed(2));
    document.getElementById('leWeeks').innerHTML = parseFloat(lifeExpectancyWeeks.toFixed(2));
    document.getElementById('netSettlementPerMonth').innerHTML = "$" + parseFloat(proRatedSettlementMonths.toFixed(2));
    document.getElementById('netSettlementPerWeek').innerHTML = "$" + parseFloat(proRatedSettlementWeeks.toFixed(2));

    // sets a'Results" to slide down upon clicking the button
    $(document).ready(function() {
        $("#results").slideDown(300);
    });

    $("#reset").click(function() {
        $("#results").slideUp(300);
    });

    return false;
}
