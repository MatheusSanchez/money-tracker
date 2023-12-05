import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="test" placeholder="Buscar transaçoes" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
