import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

export default function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <li key={expense.id}>
              <strong>{expense.description}:</strong> ${expense.amount}
            </li>
          ))
        ) : (
          <p>No expenses recorded yet.</p>
        )}
      </ul>
    </div>
  );
}
