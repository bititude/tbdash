import React, { useEffect } from 'react'
import * as d3 from 'd3'

const data = [
    {day: 'SUN', good: 20, average: 22, poor: 43},
    {day: 'MON', good: 10, average: 25, poor: 36},
    {day: 'TUE', good: 12, average: 28, poor: 31},
    {day: 'WED', good: 15, average: 31, poor: 20},
    {day: 'THU', good: 12, average: 21, poor: 19},
    {day: 'FRI', good: 17, average: 19, poor: 25},
    {day: 'SAT', good: 20, average: 22, poor: 24},
]
const renderGraph = () => {
    const width = 440
    const height = 350

    const svg = d3.select("#steam")
        .append('svg')
            .attr('width', width)
            .attr('height', height)

    const margin = {top: 20, right: 20, bottom: 30, left: 50}
    const canvasWidth = width - margin.left - margin.right
    const canvasHeight = height - margin.top - margin.right

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.right})`)

    const area = d3.area()
        .curve(d3.curveMonotoneX)
        .x(d => x(d.day))
}
const SteamGraph = () => {
    useEffect(() => {
        renderGraph()
    }, [])
    return <div id="steam"></div>
}

export default SteamGraph