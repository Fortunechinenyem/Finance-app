let expenses = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const newExpense = {
      id: Date.now(),
      ...req.body,
    };
    expenses.push(newExpense);
    res.status(201).json(newExpense);
  } else if (req.method === "GET") {
    res.status(200).json(expenses);
  } else {
    res.status(405).end();
  }
}
