window.onload = function () {
	var svg = d3.select('body')
		.append('svg')
		.attr('width', 500)
		.attr('height', 500);
	var data = [250, 210, 170, 130, 90];
	var rectHeight = 25;
	var min = d3.min(data);
	var max = d3.max(data);
	var linear = d3.scaleLinear().domain([min, max]).range([10, 300]);
	svg.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr('x', 20)
		.attr('y', function (d, i) {
			return i * rectHeight;
		})
		.attr('width', function (d) {
			return linear(d);
		})
		.attr('height', rectHeight - 2)
		.attr('fill', 'steelblue');
};