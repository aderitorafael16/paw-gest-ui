'use client'

import { ApexOptions } from 'apexcharts'
import { Component } from 'react'
import ReactApexChart, { Props as ReactApexChartProps } from 'react-apexcharts'
import { emerald, violet } from 'tailwindcss/colors'

interface ApexChartState {
  series: number[]
  options: ApexOptions
}

interface ChartProps {
  reactApexChartProps: ReactApexChartProps
}

export class DonutChart extends Component<ReactApexChartProps, ApexChartState> {
  constructor({ reactApexChartProps }: ChartProps) {
    super(reactApexChartProps)

    this.state = {
      series: [44, 55],
      options: {
        labels: ['Vagas', 'Preenchidas'],
        colors: [emerald[600], violet[600]],
        theme: {
          mode: 'light',
        },
        chart: {
          width: 320,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: true,
        },
        title: {
          text: 'Matrículas ano Corrente',
          align: 'center',
          margin: 25,
          style: {
            fontWeight: 700,
            fontSize: '1.2rem',
          },
        },
        responsive: [
          {
            breakpoint: 320,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    }
  }

  render() {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <ReactApexChart
          height={200}
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={380}
        />
      </div>
    )
  }
}
