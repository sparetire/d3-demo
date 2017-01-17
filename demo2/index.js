window.onload = function () {
	var svg = d3.select('body')
		.append('svg')
		.attr('width', 500)
		.attr('height', 500);
	var padding = {
		left: 30,
		right: 30,
		top: 20,
		bottom: 20
	};
	var data = [10, 20, 30, 40, 33, 24, 12, 5];
	var xScale = d3.scaleOrdinal()
		.domain(d3.range(data.length))
		.rangeRound([0, 500 - padding.left - padding.right]);
	var yScale = d3.scaleLinear()
		.domain([0, d3.max(data)])
		.range([500 - padding.top - padding.bottom], 0);
	var xAxis = d3.axisBottom(xScale);
	var yAxis = d3.axisLeft(yScale);
}