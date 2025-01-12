// Budget Calculator Logic
document.getElementById("calculateBudget").addEventListener("click", function() {
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const result = document.getElementById("budgetResult");
  
    if (isNaN(income) || isNaN(expenses)) {
      alert("Please enter valid numbers for both income and expenses.");
    } else {
      const savings = income - expenses;
      result.textContent = `Your monthly savings: ₹${savings.toFixed(2)}`;
    }
  });
