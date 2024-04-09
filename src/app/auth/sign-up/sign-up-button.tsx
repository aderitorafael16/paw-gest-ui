'use client'

import { Loader2, LogIn } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'

interface ButtonProps {
  onSubmit: () => void
}

export function SignUpButton({ onSubmit }: ButtonProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext()

  return (
    <Button disabled={isSubmitting} onClick={onSubmit} type="button">
      {isSubmitting ? (
        <Loader2 className="mr-2 size-4 animate-spin" />
      ) : (
        <LogIn className="mr-2 size-4" />
      )}
      Criar Conta
    </Button>
  )
}
