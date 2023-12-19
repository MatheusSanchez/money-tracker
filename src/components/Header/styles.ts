import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.5s;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: end;
  gap: 0.5rem;
`

export const LoginButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['gray-500']};
    transition: background-color 0.5s;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: end;
  gap: 0.5rem;
`
