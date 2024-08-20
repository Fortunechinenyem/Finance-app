export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const expenses = [
        { id: 1, description: "Coffee", amount: 5.0, date: "2024-08-19" },
        { id: 2, description: "Lunch", amount: 12.0, date: "2024-08-20" },
      ];

      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch expenses" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
