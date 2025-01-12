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
  
  // Expense Tracker Logic
  let totalExpenses = 0;
  document.getElementById("addExpense").addEventListener("click", function() {
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
  
    if (isNaN(expenseAmount) || expenseAmount <= 0) {
      alert("Please enter a valid expense amount.");
    } else {
      totalExpenses += expenseAmount;
      document.getElementById("totalExpenses").textContent = totalExpenses.toFixed(2);
      document.getElementById("expenseAmount").value = '';
    }
  });