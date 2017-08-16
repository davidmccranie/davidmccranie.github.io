function calculateSettlement() {

    /*
    Set variables for settlement amount,
    costs amount, fee amount
    */
    var settlementAmount = document.getElementById('settlementAmount').value;
    var costsAmount = document.getElementById('costs').value;
    var feeAmount;
/* remove required attribute for claimant-paid and ec-paid costs where 
costsAmount == "";
*/
    if (costsAmount == "") {
  document.getElementById("claimant-paid").removeAttr('required');
  document.getElementById("ec-paid").removeAttr('required');
}
    
    /*
    calculate fee amount based on value of
    settlement amount
    */
    if (settlementAmount <= 5000) {
        feeAmount = settlementAmount * 0.20;
    } else if (settlementAmount <= 10000) {
        feeAmount = 1000 + (settlementAmount - 5000) * 0.15;
    } else {
        feeAmount = settlementAmount * 0.1 + 750;
    }
    /*
    Set variable for total cost to E/C. Calcuate total
    cost depending on whether settlement is inclusive of fees
    and which side pays the costs
    */

    var totalCost;
    if (document.getElementById("plus-a-fee").checked === true && document.getElementById("claimant-paid").checked === true) {
        totalCost = parseFloat(settlementAmount) + parseFloat(feeAmount);
    } else if (document.getElementById("inclusive-of-fees").checked === true && document.getElementById("claimant-paid").checked === true) {
        totalCost = parseFloat(settlementAmount);
    } else if (document.getElementById("plus-a-fee").checked === true && document.getElementById("ec-paid").checked === true) {
        totalCost = parseFloat(settlementAmount) + parseFloat(feeAmount) + parseFloat(costsAmount);
    } else if (document.getElementById("inclusive-of-fees").checked === true && document.getElementById("ec-paid").checked === true) {
        totalCost = parseFloat(settlementAmount) + parseFloat(costsAmount);
    }

    /*
    Set variable for amount of net settlement to claimant.
    Calculate net settlement depending on whether settlement
    amount is inclusive of fees and which side pays the costs.
    */

    var netToClaimant;
    if (document.getElementById("plus-a-fee").checked === true && document.getElementById("claimant-paid").checked === true) {
        netToClaimant = parseFloat(settlementAmount) - parseFloat(costsAmount);
    } else if (document.getElementById("inclusive-of-fees").checked === true && document.getElementById("claimant-paid").checked === true) {
        netToClaimant = parseFloat(settlementAmount) - parseFloat(feeAmount) - parseFloat(costsAmount);
    } else if (document.getElementById("plus-a-fee").checked === true && document.getElementById("ec-paid").checked === true) {
        netToClaimant = parseFloat(settlementAmount);
    } else if (document.getElementById("inclusive-of-fees").checked === true && document.getElementById("ec-paid").checked === true) {
        netToClaimant = parseFloat(settlementAmount) - parseFloat(feeAmount) + parseFloat(costsAmount);
    }


    //Print results to page
    document.getElementById('amountOfFee').innerHTML = "$" + parseFloat(feeAmount.toFixed(2)).toLocaleString();
    document.getElementById('totalCost').innerHTML = "$" + parseFloat(totalCost.toFixed(2)).toLocaleString();
    document.getElementById('netToClaimant').innerHTML = "$" + parseFloat(netToClaimant.toFixed(2)).toLocaleString();

    $(document).ready(function() {
        // slide down results on click of calculate button
        $("#results").slideDown(300);
        // slide up results and reset form on click of reset button
        $("#reset").click(function() {
            $("#results").slideUp(300);
            window.location.reload();
        });
    });

    return false;
}
