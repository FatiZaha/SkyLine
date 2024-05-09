import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

function PieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/1/reservations')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.reduce((acc, reservation) => {
          const month = new Date(reservation.dateRes).getMonth() + 1;
          if (acc[month]) {
            acc[month].count += 1;
          } else {
            acc[month] = {
              month: month,
              count: 1
            };
          }
          return acc;
        }, {});
        const pieData = Object.values(formattedData);
        setData(pieData);
      });
  }, []);

  const svgRef = useRef();

  useEffect(() => {
    if (data.length > 0) {
      const svg = d3.select(svgRef.current);
      const width = +svg.attr('width');
      const height = +svg.attr('height');
      const radius = Math.min(width, height) / 2;
      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const pie = d3.pie()
        .value(d => d.count)
        .sort(null);

      const pieData = pie(data);

      const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

      const arcs = svg.selectAll('arc')
        .data(pieData)
        .enter()
        .append('g')
        .attr('class', 'arc')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

      arcs.append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => color(i));

      arcs.append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .text(d => `${getMonthName(d.data.month)} (${d.data.count})`);
    }
  }, [data]);

  const getMonthName = (monthNumber) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthNumber - 1];
  };

  return (
    <div style={{ margin: 'auto', width: 'fit-content' }}>
      <svg ref={svgRef} width={400} height={400}></svg>
    </div>
  );
}

export default PieChart;