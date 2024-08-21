import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ExpenseProvider } from "@/context/ExpenseContext";
import { BudgetProvider } from "@/context/BudgetContext";
import { IncomeProvider } from "@/context/IncomeContext";

function MyApp({ Component, pageProps }) {
  return (
    <BudgetProvider>
      {" "}
      <ExpenseProvider>
        <IncomeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </IncomeProvider>
      </ExpenseProvider>
    </BudgetProvider>
  );
}

export default MyApp;
