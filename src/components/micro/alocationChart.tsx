"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AllocationChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");
      if (myChartRef) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(myChartRef, {
          type: "doughnut",
          data: {
            labels: ["Initial Distribution", "Liquidity Pool", "Community Rewards", "Development Fund", "Marketting & Partnership"],
            datasets: [
              {
                backgroundColor: [
                  "#e9194e",
                  "#648fa3",
                  "#7563b6",
                  "#c35c3c",
                  "#25895c",
                ],
                data: [55, 49, 44, 24, 15],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              onComplete: () => {
                if (myChartRef) {
                  myChartRef.canvas.style.height = "auto";
                  myChartRef.canvas.style.width = "100%";
                }
              },
            },
            title: {
              display: true,
              text: "World Wide Wine Production 2018",
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "250px" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default AllocationChart;
