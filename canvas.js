// 04.12.2018 Draw a barchart

// adjust style of canvas


const margin ={
      left:100,right:100,top:10,bottom:100
};        

// width of svg frame
const width = 
parseInt(d3.select("#canvas").style("width"),10)-margin.left-margin.right;

// height of svg frame
const height =
parseInt(d3.select("#canvas").style("height"),10)-margin.top-margin.bottom;



const svg = d3.select("#canvas")
              .append("svg")
              .style("border","1px solid gray")
              .attr("width",width+margin.left+margin.right)
              .attr("height",height+margin.top+margin.bottom);

// define group
const g = svg.append("g")
              .attr("transform","translate("+margin.left+","+margin.top+")");

// hint 
g.append("text")
  .attr("text-anchor", "middle")
  .attr("x", (width / 2))             
  .attr("y", margin.top*5)
  .text("please input data on your right side")

// draw bar chart with reading json file 
// d3.json('./data/buildings.json')
//       .then(data=>{
//           // convert string to integer
//           data.forEach(element=>{
//               element.height=+element.height;
//           });
//           // Define x scale
//           var x= d3.scaleBand()
//                     . domain(data.map(el=>{return el.name;}))
//                     .range([0,width])
//                     .paddingInner(0.3)
//                     .paddingOuter(0.3);
//           // Define y scale
//           var y =d3.scaleLinear()
//                     .domain([0,d3.max(data,el=>{
//                         return el.height;
//                     })])
//                     .range([0,height]);
//           // Define the x-axis
//           var x_axis= d3.axisBottom(x);       
//           g.append('g').attr("transform","translate(0,"+height+")").call(x_axis)
//                         .selectAll('text')
//                           .attr("transform","rotate(-45)")
//                           .attr('x',-40)
//                           .attr('y',20)
                        

//           // Define the y-axis
//           var y_axis= d3.axisLeft(y);
//           g.append('g').call(y_axis);

//           // Draw the barchart
//           var rects = g.selectAll("rect")
//                         .data(data)
//                           . enter()
//                             .append("rect")
//                               .attr("x",(el,index)=>{
//                                 return x(el.name);
//                               })
//                               .attr("y",0)
//                               .attr("width",x.bandwidth)
//                               .attr("height",el=>{
//                                  return y(el.height);
//                               })
//                               .attr("fill","#8fb2c9")
//       })
//       .catch(err=>console.log(err));

// draw bar chart with local data


