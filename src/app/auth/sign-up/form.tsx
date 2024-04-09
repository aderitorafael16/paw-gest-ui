'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'

import { ImageTab } from './image-tab'
import { PasswordTab } from './password-tab'
import { PersonalDataTab } from './personal-data-tab'
import { SignUpButton } from './sign-up-button'

const createInstituteFormSchema = z.object({
  instituteName: z.string(),
  type: z.string().default('formationCenter'),
  address: z.string(),
  phoneNumber: z.string(),
  email: z.string().email('Digite o email correctamente').toLowerCase(),
  websiteUrl: z.string().url('O Website precisa ser uma URL'),
  password: z.string(),
  passwordMatch: z.string(),
})

export type CreateInstituteFormSchema = z.infer<
  typeof createInstituteFormSchema
>

export function Form() {
  const createInstituteForm = useForm<CreateInstituteFormSchema>({
    resolver: zodResolver(createInstituteFormSchema),
  })

  const { handleSubmit } = createInstituteForm

  async function handleCreateInstitute(data: CreateInstituteFormSchema) {
    console.log(data)
  }
  return (
    <FormProvider {...createInstituteForm}>
      <form className="flex w-full flex-col justify-between gap-2 p-4 lg:w-[50%]">
        <div className="flex flex-col justify-between text-zinc-900 dark:text-zinc-100">
          <div className="flex justify-between">
            <span className="text-xl">Criar Conta</span>
            <ThemeSwitcher />
          </div>
          <div className="text-sm">
            <p>Oferecemo 15 dias de testes gratuitos.</p>
            <p>
              Os campos contêndo ( <Required /> ) são obrigatórios!
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="personalDatas"
          className="w-full max-w-[29rem] self-center"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personalDatas">Dados</TabsTrigger>
            <TabsTrigger value="image">Logotipo</TabsTrigger>
            <TabsTrigger value="password">Senha</TabsTrigger>
          </TabsList>

          <PersonalDataTab />

          <ImageTab />

          <PasswordTab />
        </Tabs>

        <SignUpButton onSubmit={handleSubmit(handleCreateInstitute)} />
      </form>
    </FormProvider>
  )
}

export function Required() {
  return <span className="text-red-400">*</span>
}
