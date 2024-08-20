import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ExpenseProvider } from "@/context/ExpenseContext";

function MyApp({ Component, pageProps }) {
  return (
    <ExpenseProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ExpenseProvider>
  );
}

export default MyApp;
