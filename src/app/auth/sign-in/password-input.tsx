'use client'

import { LockKeyhole } from 'lucide-react'
import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  function handleTooglePassword() {
    setShowPassword((previewShowPassword) => !previewShowPassword)
  }

  return (
    <>
      <div className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-100 p-2 hover:ring hover:ring-violet-600 focus-visible:ring focus-visible:ring-violet-600 dark:bg-zinc-800">
        <Label htmlFor="password">
          <LockKeyhole className="size-6 text-zinc-500" />
        </Label>
        <input
          minLength={8}
          required
          maxLength={12}
          id="password"
          name="password"
          placeholder="Senha"
          type={showPassword ? 'text' : 'password'}
          className="w-full bg-zinc-100 outline-none dark:bg-zinc-800 dark:placeholder:text-zinc-400"
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
    </>
  )
}
