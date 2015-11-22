// http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.13/d3.min.js
// Boilerplate stuff
var h = window.innerHeight,
    w = window.innerWidth,
    size = 100,
    halfSize = size / 2,
    sizeAndHalf = size * 1.425, // 
    rotateDeg = 45,
    num = Math.ceil((w + halfSize) / (sizeAndHalf)) * Math.ceil((h + halfSize) / (sizeAndHalf));

var svg = d3.select('body').append('svg'),
    colorScale = d3.scale.linear().domain([0,num]).range(['rgb(0,66,255)', 'rgb(255,0,0)']);

svg.attr('height', h)
   .attr('width', w)
   .style('background', 'black');

var x_pos = 0,
    y_pos = 0;

for(var i = 0; i < num; i ++) {
  var group = svg.append('g')

  group.attr('transform', 'translate(' + x_pos + ', ' + y_pos + ')')

  var rect = group.append('rect')
    .attr('class', 'rect')
    .attr('width', size)
    .attr('height', size)
    .attr('x', -halfSize)
    .attr('y', -halfSize)
    .attr('transform', 'rotate(45, 0, 0)')  
    .attr('stroke', colorScale(i));

  x_pos += sizeAndHalf;
  if(x_pos > w + halfSize) {
    x_pos = 0;
    y_pos += sizeAndHalf;
  }
}

animate();

function animate() {
  rotateDeg += 90;
  d3.selectAll('rect')
    .transition()
    .ease('linear')
    .duration(1000)
    .attr('transform', 'rotate(' + rotateDeg + ', 0, 0)')

  setTimeout(function(){
    return window.requestAnimationFrame(animate);
  }, 2000);
}