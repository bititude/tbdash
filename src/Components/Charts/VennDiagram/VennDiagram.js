import React, { useEffect } from 'react'
import * as d3 from 'd3'

const VennDiagram = () => {
    const renderDiagram = () => {
        const width = 440
        const height = 350
        const margin = { top: 20, right: 20, bottom: 20, left: 20}

        const innerWidth = width - margin.left - margin.right
        const innerHeight = height - margin.top - margin.bottom    
        const vennContainer = d3.select('#auditing_venndgm')
            .selectAll('svg')
            .data([1])
            .enter()
                .append('circle')
                    .attr('r', height/2)
                    .attr('cx', 0)
                    .attr('cy', 0)
                    .attr('fill', 'yellow')
                    .attr('stroke', 'black')
    }    
    useEffect(() => {   
        renderDiagram()
    }, [])    
    
    return <div id="auditing_venndgm"></div>
}

export default VennDiagram