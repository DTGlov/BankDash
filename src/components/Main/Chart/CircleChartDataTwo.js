export const data = {
  labels: ["limit", "Total"],
  datasets: [
    {
      label: "",
      data: [25, 75],
      backgroundColor: ["rgba(224, 203, 7, 0.8)", "rgba(128, 128, 128, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 0)", "rgba(54, 162, 235, 0)"],
      borderWidth: 1,
    },
  ],
};

export const options = {
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
