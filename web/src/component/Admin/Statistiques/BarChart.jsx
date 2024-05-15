import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './BarChart.css'; 

function BarChart() {
  const [data, setData] = useState([]);

  const svgRef = useRef();

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/1/compagnies/all')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const svg = d3.select(svgRef.current);
      const margin = { top: 50, right: 20, bottom: 50, left: 50 };
      const width = +svg.attr('width') - margin.left - margin.right;
      const height = +svg.attr('height') - margin.top - margin.bottom;

      const cities = [...new Set(data.map(d => d.adresse.split(',')[1]))];
      const companiesCount = cities.map(city => data.filter(d => d.adresse.split(',')[1] === city).length);

      const x = d3.scaleBand()
        .domain(cities)
        .range([0, width])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(companiesCount)]).nice()
        .range([height, 0]);

      svg.selectAll('*').remove();

      const chart = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      chart.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.adresse.split(',')[1]))
        .attr('y', d => y(data.filter(item => item.adresse.split(',')[1] === d.adresse.split(',')[1]).length))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(data.filter(item => item.adresse.split(',')[1] === d.adresse.split(',')[1]).length))
        .attr('fill', '#158a88');

      chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .attr('text-anchor', 'end')
        .attr('dx', '-0.8em')
        .attr('dy', '0.15em');

      chart.append('g')
        .call(d3.axisLeft(y));

      // Titre en haut avec classe CSS
      svg.append('text')
        .attr('class', 'chart-title') // Ajouter la classe CSS
        .attr('y', 20)
        .attr('x', width / 2 + margin.left)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text('Number of companies per cities');

      // Ajout du nom de l'axe y avec classe CSS
      svg.append('text')
        .attr('class', 'axis-label') // Ajouter la classe CSS
        .attr('transform', 'rotate(-90)')
        .attr('y', 5)
        .attr('x', -(height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text('Number');

      // Ajout du nom de l'axe x avec classe CSS
      svg.append('text')
        .attr('class', 'axis-label') // Ajouter la classe CSS
        .attr('y', height + margin.top + margin.bottom - 20)
        .attr('x', width / 2 + margin.left)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text('Cities');
    }
  }, [data]);

  return (
    <svg ref={svgRef} width={400} height={300}></svg>
  );
}

export default BarChart;