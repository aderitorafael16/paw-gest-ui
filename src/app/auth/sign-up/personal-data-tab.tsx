'use client'

import { useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TabsContent } from '@/components/ui/tabs'

import { CreateInstituteFormSchema, Required } from './form'

export function PersonalDataTab() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateInstituteFormSchema>()
  return (
    <TabsContent value="personalDatas">
      <ScrollArea className="h-[14.5rem] pr-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="institute">
              Nome da Instituição
              <Required />
            </Label>
            <Input
              id="institute"
              type="text"
              placeholder="Paw Gest School"
              {...register('instituteName')}
            />
            {errors?.instituteName && (
              <span className="text-xs text-red-400">
                {errors.instituteName?.message}
              </span>
            )}
          </div>

          <div>
            <Label htmlFor="typeInstitute">
              Tipo de Instituição <Required />
            </Label>
            <Select {...register('type')}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione a sua instituição" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="primary">Primária</SelectItem>
                <SelectItem value="secundary">Secundária</SelectItem>
                <SelectItem value="faculty">Faculdade</SelectItem>
                <SelectItem value="university">Univerdade</SelectItem>
                <SelectItem value="formationCenter">
                  Centro de Formação
                </SelectItem>
              </SelectContent>
            </Select>
            {errors?.type && (
              <span className="text-xs text-red-400">
                {errors.type?.message}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="address">
              Endereço <Required />
            </Label>
            <Input
              id="address"
              type="text"
              placeholder="País / Estado / Distrito / etc..."
              {...register('address')}
            />
            {errors?.address && (
              <span className="text-xs text-red-400">
                {errors.address.message}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="phoneNumber">
              Número de Telefone <Required />
            </Label>
            <Input
              id="phoneNumber"
              type="text"
              placeholder="123 456 789"
              {...register('phoneNumber')}
            />
            {errors?.phoneNumber && (
              <span className="text-xs text-red-400">
                {errors.phoneNumber?.message}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">
              Email <Required />
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="geral@pawgest.ao"
              {...register('email')}
            />
            {errors?.email && (
              <span className="text-xs text-red-400">
                {errors.email?.message}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="websiteUrl">
              Website URl <Required />
            </Label>
            <Input
              id="websiteUrl"
              type="text"
              placeholder="https://meusiteoficial.ao"
              {...register('websiteUrl')}
            />
            {errors?.websiteUrl && (
              <span className="text-xs text-red-400">
                {errors.websiteUrl?.message}
              </span>
            )}
          </div>
        </div>
      </ScrollArea>
    </TabsContent>
  )
}
