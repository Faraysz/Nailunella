'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function SalesPurchaseChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options = {
    series: [
      {
        name: 'Sales',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Purchase',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    colors: ['#ff4da6', '#ffc0cb'],
    chart: {
      type: 'bar',
      height: 350,
      width: '100%',
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: "#e2e8f0",
    },
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      markers: {
        size: 5,
        shape: 'square',
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '85%',
        borderRadius: 3,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['28 Jan', '30 Jan', '1 Feb', '2 Feb', '3 Feb', '4 Feb', '5 Feb'],
      axisBorder: {
        show: false,
        color: "#e2e8f0",
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 120,
      tickAmount: 6,
      labels: {
        formatter: function (e) {
          return "Rp " + e + " ribuan";
        },
      },
      title: {
        text: 'Rp (ribuan)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (e) {
          return "Rp " + e + ".000";
        },
      },
    },
  };

  if (!mounted) {
    return <div className="skeleton-box rounded w-100" style={{ height: '350px' }}></div>;
  }

  return (
    <div style={{ minHeight: '350px' }}>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={350}
        width="100%"
      />
    </div>
  );
}

export function CustomerRadialChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options = {
    series: [75, 55],
    chart: {
      height: 200,
      type: 'radialBar',
    },
    colors: ['#ff4da6', '#ffc0cb'],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '50%',
        },
        track: {
          background: '#f8f9fa',
          strokeWidth: '100%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['First Time', 'Return'],
  };

  if (!mounted) {
    return <div className="skeleton-box rounded-circle mx-auto my-3" style={{ width: '160px', height: '160px' }}></div>;
  }

  return (
    <div style={{ minHeight: '180px' }}>
      <Chart
        options={options}
        series={options.series}
        type="radialBar"
        height={190}
        width="100%"
      />
    </div>
  );
}

export default SalesPurchaseChart;