'use client'

import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TabsContent } from '@/components/ui/tabs'

import { CreateInstituteFormSchema, Required } from './form'

export function PasswordTab() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    formState: { errors },
  } = useFormContext<CreateInstituteFormSchema>()

  function handleTooglePassword() {
    setShowPassword((previewShowPassword) => !previewShowPassword)
  }
  return (
    <TabsContent className="h-[14.5rem]" value="password">
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="institute">
            Senha
            <Required />
          </Label>
          <Input
            required
            min={8}
            max={12}
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Sua senha 12345678"
            {...register('password')}
          />
          {errors?.password && (
            <span className="text-xs text-red-400">
              {errors.password?.message}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="passwordMatch">
            Confirmação de Senha
            <Required />
          </Label>
          <Input
            required
            min={8}
            max={12}
            id="passwordMatch"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirme a sua senha..."
            {...register('passwordMatch')}
          />
          {errors?.passwordMatch && (
            <span className="text-xs text-red-400">
              {errors.passwordMatch?.message}
            </span>
          )}
        </div>

        <div className="flex items-center">
          <Checkbox
            checked={showPassword}
            onCheckedChange={handleTooglePassword}
            className="mr-2"
          />
          <span className="text-xs text-zinc-700 dark:text-zinc-300">
            Mostrar senha
          </span>
        </div>
      </div>
    </TabsContent>
  )
}
