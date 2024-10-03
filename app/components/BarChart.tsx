"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import {
  gradebookAssignmentsColumns,
  gradebookAssignmentsData,
} from "../../assets";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
const data = {
  labels: gradebookAssignmentsData.map((columns) => columns["Assignment Name"]),
  datasets: [
    {
      label: "Grade Distribution of Assignments",

      data: gradebookAssignmentsData.map((columns) => columns["Marks"]),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const option = {
  responsive: true,
  maintainAspectRatio: false,
};

const BarChart = () => {
  return (
    <div className=" min-h-60">
      <Bar data={data} options={option} />
    </div>
  );
};
export default BarChart;
