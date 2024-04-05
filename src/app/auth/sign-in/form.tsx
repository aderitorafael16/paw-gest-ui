import { Mail } from 'lucide-react'
import Image from 'next/image'

import google from '@/assets/google.png'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'

import { SignUpDialog } from '../sign-up/sign-up'
import { HandleSignInWithEmail } from './actions'
import { PasswordInput } from './password-input'
import { SignInWithEmailButton } from './sign-in-with-email-button'

export function Form() {
  return (
    <form
      method="POST"
      action={HandleSignInWithEmail}
      className="flex w-full flex-col gap-10 p-4 lg:w-[50%]"
    >
      <div className="flex justify-between text-zinc-900 dark:text-zinc-100">
        <span className="text-xl">Iniciar Sessão</span>
        <ThemeSwitcher />
      </div>
      <div className="space-y-4">
        <div className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-100 p-2 hover:ring hover:ring-violet-600 focus-visible:ring focus-visible:ring-violet-600 dark:bg-zinc-800">
          <Label htmlFor="email">
            <Mail className="size-6 text-zinc-500" />
          </Label>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className="w-full bg-zinc-100 outline-none dark:bg-zinc-800 dark:placeholder:text-zinc-400"
          />
        </div>

        <PasswordInput />

        <SignInWithEmailButton />

        <Separator />

        <div>
          <p className="mb-4 text-center text-xs text-zinc-600">Ou</p>

          <Button
            className="w-full space-x-2 py-5"
            variant={'outline'}
            disabled
          >
            <Image quality={100} src={google} alt="Google" />{' '}
            <span>Login com Google</span>
          </Button>
        </div>

        <p className="text-center text-xs text-zinc-950 dark:text-zinc-300">
          Ainda não tem uma conta? <br />
          <SignUpDialog />
        </p>
      </div>
    </form>
  )
}
