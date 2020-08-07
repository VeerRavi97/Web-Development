export class Donut {


    draw(data, total) {
        // console.log("drawing with data", data);
        let canvas = d3.select('.doughnut');

        let width = 300;
        let height = 275;

        // const color = d3.scaleOrdinal(d3['schemeSet3'])
        //     .domain(data.map(d => d.role));

        const pie = d3.pie()
            .sort(null)
            .value(d => d.count);
        // console.log(pie(data));

        const svg = canvas.append('svg')
            .attr('width', width)
            .attr('height', height);

        const graph = svg.append('g')
            .attr('transform', `translate(${width/2},${height/2})`)

        //const angles = pie(data);
        // console.log(angles);

        const Path = d3.arc()
            .outerRadius(100)
            .innerRadius(66);

        //console.log(Path);
        const paths = graph.selectAll('path')
            .data(pie(data));


        paths.enter()
            .append('path')
            .attr('class', 'arc')
            .attr('fill', d => d.data.color)
            .attr('d', d => Path(d));

        graph.append("text")
            .attr("text-anchor", "middle")
            .attr('class', "doughnut__num")
            .text(total);


        graph.append("text")
            .attr("text-anchor", "middle")
            .attr('font-size', '1.2em')
            .attr('y', 25)
            .attr('fill', "black")
            .text("Members");


    }

    redraw(data, total) {

        console.log("Redrawing with data", data);

        document.querySelector(".doughnut__num").innerHTML = total;

        const pie = d3.pie()
            .sort(null)
            .value(d => d.count)(data);

        console.log(pie);
        let path = d3.selectAll("path").data(pie);

        const Path = d3.arc()
            .outerRadius(100)
            .innerRadius(66);
        path.attr("d", Path);


    }
}