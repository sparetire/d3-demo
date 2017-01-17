window.onload = function () {
	var svg = d3.select('body')
		.append('svg')
		.attr('width', 500)
		.attr('height', 500);
	var data = [2.5, 2.1, 1.7, 1.3, 0.9];
	var linear = d3.scaleLinear().domain([0, d3.max(data)]).range([0, 250]);
	var axis = d3.axisBottom(linear).ticks(7);
	svg.append('g').call(axis).classed('axis', true);
};