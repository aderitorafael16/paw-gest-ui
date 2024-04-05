'use client'

import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TabsContent } from '@/components/ui/tabs'

import { Required } from './sign-up'

export function PasswordTab() {
  const [showPassword, setShowPassword] = useState(false)

  function handleTooglePassword() {
    setShowPassword((previewShowPassword) => !previewShowPassword)
  }
  return (
    <TabsContent className="h-[14rem]" value="password">
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="institute">
            Senha
            <Required />
          </Label>
          <Input
            min={8}
            max={12}
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Sua senha 12345678"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="passwordMatch">
            Confirmação de Senha
            <Required />
          </Label>
          <Input
            min={8}
            max={12}
            id="passwordMatch"
            name="passwordMatch"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirme a sua senha..."
          />
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
