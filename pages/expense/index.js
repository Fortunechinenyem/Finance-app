export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/expenses");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const initialExpenses = await res.json();

    return { props: { initialExpenses } };
  } catch (error) {
    console.error("Failed to fetch expenses:", error);
    return { props: { initialExpenses: [] } };
  }
}

export default function ExpensePage({ initialExpenses }) {
  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {initialExpenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
