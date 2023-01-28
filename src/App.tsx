import { TransactionsProvider } from "./Contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";

export function App() {


  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>



  )
}

