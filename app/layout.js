import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ExpenseProvider } from "@/context/ExpenseContext";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ego-X",
  description: "A personal Finance Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ExpenseProvider>
          <Layout>{children}</Layout>
        </ExpenseProvider>
      </body>
    </html>
  );
}
