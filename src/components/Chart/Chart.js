import React from 'react';
import {   Legend, Line, LineChart,   XAxis, YAxis } from 'recharts';
import './Chart.css'
const  Chart = () => {
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];
    return (
       <div className="chart-container">
        <div className="chart">
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
       
        <XAxis dataKey="name" />
        <YAxis />
        
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
        </div>
       
      <div className="chart-description">
       <div>
       <h1>Most Spoken Languages Worldwide</h1>
        <p>Even though you’re reading this article in English, there’s a good chance it might not be your mother tongue. Of the billion-strong English speakers in the world, only 33% consider it their native language.The popularity of a language depends greatly on utility and geographic location. Additionally, how we measure the spread of world languages can vary greatly depending on whether you look at total speakers or native speakers.Today’s detailed visualization from WordTips illustrates the 100 most spoken languages in the world, the number of native speakers for each language, and the origin tree that each language has branched out from.</p>
       </div>
       <div>
         <h1>Which Languages Have the Most Speakers?</h1>
         <p>It comes as no surprise that English reigns supreme, with over 1.1 billion total speakers—or roughly 15% of the global population. Mandarin Chinese, Hindi, Spanish, and French round out the top five.</p>
       </div>
      </div>
       </div>
      
    );
     
    
};

export default  Chart;