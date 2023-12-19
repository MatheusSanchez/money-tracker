import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, InputContainerIcon, Overlay } from './styles'
import { At, Password, X } from 'phosphor-react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  // type: z.enum(['income', 'outcome']),
})

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function LoginModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLoginForm(data: LoginFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Login</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="" onSubmit={handleSubmit(handleLoginForm)}>
          <InputContainerIcon>
            <At size={25} />
            <input
              type="email"
              placeholder={'Email'}
              required
              {...register('email')}
            />
          </InputContainerIcon>
          <InputContainerIcon>
            <Password size={25} />
            <input
              type={'password'}
              placeholder="password"
              required
              {...register('password')}
            />
          </InputContainerIcon>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
