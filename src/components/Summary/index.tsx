import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer, SummaryCard } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { ptBrRealFormartter } from '../../utils/formatter'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (accSummary, transaction) => {
      if (transaction.type === 'income') {
        accSummary.income += transaction.price
        accSummary.total += transaction.price
      } else {
        accSummary.outcome += transaction.price
        accSummary.total -= transaction.price
      }

      return accSummary
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong> {ptBrRealFormartter.format(summary.income)} </strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong> {ptBrRealFormartter.format(summary.outcome)} </strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#00b37e" />
        </header>
        <strong> {ptBrRealFormartter.format(summary.total)} </strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
