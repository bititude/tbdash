import React, { useEffect } from 'react'
import * as d3 from 'd3';
import { axisLeft } from 'd3';

const renderDonut = data => {    
    let text = ""
    const width = 440
    const height = 350
    const thickness = 40
    var cx = width / 2.5;
    var cy = height / 2.5;
    const radius = Math.min(width, height) / 2.5
    const color = d => d.color

    const svg = d3.select("#donut")
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    const g = svg.append('g')
        .attr('transform', `translate(${width/2}, ${height/2})`)
        
    const getOffset = i => {
        if(i !== data.length-1)
        {
            let sum = 0
            for(let j=i+1; j<data.length; j++)
                sum += data[j].percent
            return sum
        }
        else {
            return 0
        }
    }
    
    g.selectAll("path")
        .data(data).enter()
      .append("path")
        .each(drawArc);
    
    // const legend = svg.append('g')
    //     .attr('transform', `translate(0, ${height-10})`)
    // legend.selectAll("path")
    //     .data(data)
    //         .enter()
    //             .append("circle").attr("r", 6).attr("y", (d,i) => (i+1) * 50).style("fill", d => d.color)

    // // legend.append("circle").attr("r", 6).style("fill", "#69b3a2")
    // // legend.append("circle").attr("r", 6).style("fill", "#404080")
    // // legend.append("text").attr("x", 220).attr("y", 130).text("variable A").style("font-size", "15px").attr("alignment-baseline","middle")
    // // legend.append("text").attr("x", 220).attr("y", 160).text("variable B").style("font-size", "15px").attr("alignment-baseline","middle")
    function drawArc(d, i) {  
        var arc = d3.arc()
                .startAngle(0)
                .endAngle(Math.PI*2 * (d.percent+getOffset(i))/100)
                .innerRadius(radius - thickness)
                .outerRadius(radius)
                .cornerRadius(thickness/2)
        // var text = g.append("text")
        //     .attr("x", radius)
        //     .attr("dy", 14);
        
        d3.select(this)    	
            .attr("d", arc)
            .attr("id", "path" + i)
            .attr("fill", d.color)
        
        // text.append("textPath")
        //     .attr("stroke","white")
        //     .attr("fill","white")
        //     .attr("xlink:href","#path" + i)
        //     .text(d.percent);
    }    
}


const Donut = ({data}) => {
    useEffect(() => {
        renderDonut(data)
    }, [])    
    return <div id="donut"></div>
}

export default Donut;