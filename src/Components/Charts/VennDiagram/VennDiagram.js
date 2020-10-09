import React, { useEffect } from 'react'
import * as d3 from 'd3'

const VennDiagram = () => {
    const renderDiagram = () => {
        const width = 440
        const height = 350
        const margin = { top: 50, right: 50, bottom: 50, left: 50}

        const innerWidth = width - margin.left - margin.right
        const innerHeight = height - margin.top - margin.bottom    
        const vennContainer = d3.select('#auditing_venndgm')
            .selectAll('svg')
            .data([1])
            .enter()
                .append('svg')
                    .attr('width', width)                    
                    .attr('height', height)
        const g = vennContainer.append('g')
            .attr('transform', `translate(${innerWidth/2.5}, ${innerHeight/2.5})`)
            
        const circle1 = g.append('circle')
            .attr('r', innerHeight/2.5)
            .attr('cx', 130)
            .attr('cy', 20)
            .attr('fill', '#01D09F')
        
        const circle2 = g.append('circle')
            .attr('r', innerHeight/3)
            .attr('cx', -10)
            .attr('cy', 90)
            .attr('fill', '#FFDB1C')
        
        const circle3 = g.append('circle')
            .attr('r', innerHeight/3.5)
            .attr('cx', 100)
            .attr('cy', 150)
            .attr('fill', '#FF8D8D')                
    }    
    useEffect(() => {   
        renderDiagram()
    }, [])    
    
    return <div id="auditing_venndgm"></div>
}

export default VennDiagram