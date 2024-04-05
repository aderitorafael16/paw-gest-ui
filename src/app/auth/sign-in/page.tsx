import { PawPrint } from 'lucide-react'

import { Form } from './form'

export default function SignIn() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 lg:px-[10%]">
      <div className="flex flex-col overflow-hidden rounded-md border md:h-[30rem] md:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-4 bg-login bg-cover p-4 text-zinc-50 md:h-full lg:w-[50%]">
          <h1 className="flex items-center justify-center rounded-full bg-zinc-900 p-4 text-xl ">
            <PawPrint className="mr-2 h-6 w-6 text-violet-600" />
            <code>Paw Gest</code>
          </h1>

          <div className="space-y-2">
            <p className="text-sm md:text-2xl">
              O melhor software de Gestão Escolar.
            </p>
            <p className="hidden text-sm leading-relaxed text-zinc-300 md:flex">
              Garantimos uma solução inovadora para todo tipo de instituição de
              ensino, tranzendo para si e a sua empresa funcionalidades
              incríveis...
            </p>
          </div>

          <span className="hidden text-xs text-zinc-400 md:flex">
            Developed By Adérito Rafael
          </span>
        </div>
        <Form />
      </div>
    </div>
  )
}
