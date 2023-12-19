import {
  HeaderContainer,
  HeaderContent,
  LoginButton,
  NewTransactionButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { Money, User } from 'phosphor-react'
import { LoginModal } from '../LoginModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              <Money size={25} /> <span>Nova Transaçao</span>
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <LoginButton>
              <User size={25} /> <span>Login</span>
            </LoginButton>
          </Dialog.Trigger>
          <LoginModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
