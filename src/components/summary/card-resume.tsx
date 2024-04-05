import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CardResumeProps {
  title: string
  children: ReactNode
}

export function CardResume({ children, title }: CardResumeProps) {
  return (
    <div className="w-full border-l-4 border-violet-700">
      <Card className="rounded-none">
        <CardHeader>
          <CardTitle className="uppercase text-sm text-violet-500">
            { title }
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-2">
          { children }
        </CardContent>
      </Card>
    </div>
  )
}