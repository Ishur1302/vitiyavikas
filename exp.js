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
