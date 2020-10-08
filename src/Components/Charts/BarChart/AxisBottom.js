import React from 'react'

export const AxisBottom = ({ xScale, innerHeight, /*tickFormat*/ }) =>
  xScale.ticks().map((tickValue, i) => (
    (i%2===0) && <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
      <line y2={innerHeight} />
      <text style={{ textAnchor: 'middle' /*display: i%2===0?'auto':'none'*/ }} dy=".71em" y={innerHeight + 3}>
        {tickValue}
      </text>
    </g>
  ));