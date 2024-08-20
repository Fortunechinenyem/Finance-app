// import { connectToDatabase } from "../../../lib/mongodb";

// export default async function handler(req, res) {
//   const { db } = await connectToDatabase();

//   if (req.method === "GET") {
//     const expenses = await db.collection("expenses").find({}).toArray();
//     res.status(200).json(expenses);
//   } else if (req.method === "POST") {
//     const newExpense = req.body;
//     const result = await db.collection("expenses").insertOne(newExpense);
//     res.status(201).json(result.ops[0]);
//   }
// }
