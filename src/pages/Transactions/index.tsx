import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Nome Transaçao</td>
              <td>
                <PriceHighlight variant="income"> RS 12.000 </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>05/12/2023</td>
            </tr>

            <tr>
              <td>Nome Transaçao</td>
              <td>
                <PriceHighlight variant="outcome"> RS 12.000 </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>05/12/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
