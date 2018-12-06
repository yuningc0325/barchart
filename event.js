$(document).ready(function(){

const columneContent=
'<div class="form-row"><div class="col-7"><input type="text" class="form-control" name="rowAttr" value="" placeholder="Attribute" ></div><div class="col-3"><input type="text" class="form-control" name="rowValue" value="" placeholder="Value"></div><div class="col-2"><i class="far fa-trash-alt trashbin"></i></div></div>'

// add the row
$(".addCol").click(()=>{
	$("#form").append(columneContent);
})

// remove the row
$('#form').on('click','i',function(event){
	$(this).closest('.form-row').remove();
})

// Convert form data to Json
$('.submit_button').on('click',function(event){

	// clear all data before drawing
	g.selectAll("*").remove()
	// console.log(width)
	const form = $('#form'),
		  formData = form.serializeArray();
		  
	var   counter =0,
		  Data=[];
	// console.log(formData)

	// Process form data
	for(let i=0;i<formData.length/2;i++){
			formData[counter+1].value=+formData[counter+1].value;
			Data[i]= {
				dataAttribute:formData[counter].value,
				dataValue:formData[counter+1].value
			}
			counter+=2;
	}

	console.log(Data);
	console.log(d3.max(Data,el=>{
		return el.dataValue
	}))
	// Draw barChart with local data 
	const x= d3.scaleBand()
			 .domain(Data.map(el=>{return el.dataAttribute;}))
			 .range([0,width])
			 .paddingInner(0.3)
			 .paddingOuter(0.3);

	// Define y scale
	const y =d3.scaleLinear()
	         .domain([0,d3.max(Data,el=>{
	            return el.dataValue;
			 })])
			 .range([height,0]);

	// Define the x-axis
	const x_axis= d3.axisBottom(x);       
	g.append('g').attr("transform","translate(0,"+height+")")
				 .attr('class','x_axis')
				 .call(x_axis)
	             .selectAll('text')
	             .attr("transform","rotate(-45)")
	             .attr('x',-40)
	             .attr('y',20)
	// X label
	// g.append('text').text('Attribute')
	// 				.attr('class','x_axis_label')
	// 				.attr('x',width/2-10)
	// 				.attr('y',height+80)
	// 				.style('fill',"#6a6a6a")
	
	// Define the y-axis
	const y_axis= d3.axisLeft(y);
	g.append('g').attr('class','y-axis')
				 .call(y_axis);
	// Y label
	g.append('text').text('Value')
					.attr('class','y_axis_label')
					.attr('x',-(height/2))
					.attr('y',-50)
					.style('fill',"#6a6a6a")
					.attr('transform','rotate(-90)')
	// Draw the barchart
	var rects = g.selectAll("rect")
	            .data(Data)
	              . enter()
	                .append("rect")
	                  .attr("x",(el,index)=>{
	                    return x(el.dataAttribute);
	                  })
	                  .attr("y",el=>{
	                  	return y(el.dataValue)
	                  })
	                  .attr("width",x.bandwidth)
	                  .attr("height",el=>{
	                     return height-y(el.dataValue);
	                  })
	                  .attr("fill","#8fb2c9")

	})











})

