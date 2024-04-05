import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { DocumentsTab } from './documents-tab'
import { PasswordTab } from './password-tab'
import { PersonalDataTab } from './personal-data-tab'
import { SignUpButton } from './sign-up-button'

export function SignUpDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'link'}>Crie agora mesmo!</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Criar Conta</AlertDialogTitle>
          <AlertDialogDescription>
            <p>Oferecemos 15 dias de testes gratuitos.</p>
            <p>
              Os campos contendo ( <Required /> ), são obrigatórios.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form action="" className="space-y-4 max-w-[29rem]">
          <Tabs
            defaultValue="personalDatas"
            className="w-full max-w-[29rem] self-center"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personalDatas">Dados</TabsTrigger>
              <TabsTrigger value="documents">Documentação</TabsTrigger>
              <TabsTrigger value="password">Senha</TabsTrigger>
            </TabsList>

            <PersonalDataTab />

            <DocumentsTab />

            <PasswordTab />
          </Tabs>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <SignUpButton />
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function Required() {
  return <span className="text-red-400">*</span>
}
