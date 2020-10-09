import React, { useEffect } from 'react'
import * as d3 from 'd3';

const renderDonut = data => {    
    let text = ""
    const width = 440
    const height = 350
    const thickness = 40

    const radius = Math.min(width, height) / 3
    const color = d => d.color

    const svg = d3.select("#donut")
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    const g = svg.append('g')
        .attr('transform', `translate(${width/2}, ${height/2})`)
    
    const arc = d3.arc()
        .innerRadius(radius - thickness)
        .outerRadius(radius)
        .cornerRadius(thickness/2)
    
    const pie = d3.pie()
        .value(d => d.percent)
        .sort(null)

    const path = g.selectAll('path')
        .data(pie(data))
        .enter()
        .append('g')
            .append('path')
                .attr('d', arc)
                .attr('fill', d => color(d.data))           

}

const Donut = ({data}) => {
    useEffect(() => {
        renderDonut(data)
    }, [])    
    return <div id="donut"></div>
}

export default Donut;