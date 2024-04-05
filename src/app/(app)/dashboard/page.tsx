import { BarChart, DollarSign } from 'lucide-react'

import { CardResume } from '@/components/summary/card-resume'
import { FinanceChart } from '@/components/summary/finance-chart'
import { Progress } from '@/components/ui/progress'

interface FinanceDataPerMonth {
  date: string
  expenses: number
  earnings: number
}

const financeData: FinanceDataPerMonth[] = [
  { date: '2024-01', expenses: 120000, earnings: 150000 },
  { date: '2024-02', expenses: 125000, earnings: 155000 },
  { date: '2024-03', expenses: 130000, earnings: 160000 },
  { date: '2024-04', expenses: 135000, earnings: 165000 },
  { date: '2024-05', expenses: 140000, earnings: 170000 },
]

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col space-y-5">
      <h1 className="text-center text-2xl font-bold sm:text-start">
        Dashboard
      </h1>
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <CardResume title="Entrada no Caixa Hoje">
            <div>
              <span> 20.000,00 KZ</span>
            </div>
            <DollarSign className="size-5 text-zinc-600" />
          </CardResume>

          <CardResume title="Saída no Caixa Hoje">
            <div>
              <span> 0,00 KZ</span>
            </div>
            <DollarSign className="size-5 text-zinc-600" />
          </CardResume>

          <CardResume title="Saída no Caixa Hoje">
            <div>
              <span> 0,00 KZ</span>
            </div>
            <DollarSign className="size-5 text-zinc-600" />
          </CardResume>
          <CardResume title="Estado das propinas">
            <div className="flex flex-1 items-center gap-1">
              <span>36%</span>
              <Progress value={36} />
            </div>
            <BarChart className="size-5 text-zinc-600" />
          </CardResume>
        </div>

        <div className="flex flex-col-reverse gap-4 lg:flex-row">
          <div className="flex w-full flex-col gap-4 border bg-zinc-50 dark:bg-zinc-950">
            <p className="w-full bg-zinc-200 py-4 text-center text-violet-500 dark:bg-zinc-900 md:px-4 md:text-left">
              Fluxo de Caixa nos últimos 5 meses (Entradas e Saídas)
            </p>
            <FinanceChart data={financeData} />
          </div>
          <div className="flex w-full flex-col gap-4 border bg-zinc-50 dark:bg-zinc-950  lg:max-w-[23rem]">
            <p className="w-full bg-zinc-200 py-4 text-center text-violet-500 dark:bg-zinc-900 md:px-4 md:text-left">
              Estado das Matrículas (Ano Corrente)
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
