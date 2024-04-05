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

import { Required } from './sign-up'

export function PersonalDataTab() {
  return (
    <TabsContent value="personalDatas">
      <ScrollArea className="h-[14rem] pr-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="institute">
              Nome da Instituição
              <Required />
            </Label>
            <Input
              id="institute"
              name="institute"
              type="text"
              placeholder="Paw Gest School"
            />
          </div>

          <div>
            <Label htmlFor="typeInstitute">
              Tipo de Instituição <Required />
            </Label>
            <Select name="typeInstitute">
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
          </div>

          <div className="space-y-1">
            <Label htmlFor="address">
              Email <Required />
            </Label>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="País / Estado / Distrito / etc..."
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phoneNumber">
              Número de Telefone <Required />
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="123 456 789"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">
              Email <Required />
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="geral@pawgest.ao"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="websiteUrl">
              Website URl <Required />
            </Label>
            <Input
              id="websiteUrl"
              name="websiteUrl"
              type="text"
              placeholder="https://meusiteoficial.ao"
            />
          </div>
        </div>
      </ScrollArea>
    </TabsContent>
  )
}
