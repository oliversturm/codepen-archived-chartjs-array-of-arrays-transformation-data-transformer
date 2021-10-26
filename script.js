const data = [[114, 8], [84, 17], [54, 31], [24, 17], [7, 2]];

$(() => {
  $("#chart").dxChart({
    dataSource: Array.from(
    dataTransformer.iterableOfIterablesToObjects(data, ["days", "percent"])),
    rotated: true,
    series: [{
      argumentField: "days",
      valueField: "percent",
      type: "spline" }],

    title: {
      text: "Days before Christmas to start shopping",
      subtitle: {
        text: "Made-up data" } },


    legend: {
      visible: false },

    argumentAxis: {
      title: {
        text: "Days before Christmas" } },


    valueAxis: {
      title: {
        text: "Percent of People" } } });



});