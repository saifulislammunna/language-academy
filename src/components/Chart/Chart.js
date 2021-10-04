import React from 'react';
import { Table } from 'react-bootstrap';
import {    Line, LineChart,   XAxis, YAxis } from 'recharts';
import './Chart.css'
const  Chart = () => {
    const data = [
        {
          name: "Bengali",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Russian",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "English ",
          uv: 2000,
          pv: 11400,
          amt: 2290
        },
       
        {
          name: "Arabic",
          uv: 1890,
          pv:  2774,
          amt: 2181
        },
        {
          name: "Chinese",
          uv: 2780,
          pv: 11170,
          amt: 2000
        },
        {
          name: "Spanish",
          uv: 2390,
          pv: 5400,
          amt: 2500
        },
        {
          name: "Hindi",
          uv: 3490,
          pv: 6150,
          amt: 2100
        }
      ];
    return (
       <div className="chart-container">
         {/* language  chart added*/}
        <div className="chart">
        <LineChart   
        width={600}
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
        
         
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
         
       </LineChart>
       {/* table added */}
       <div className="table">
       <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Language</th>
      <th>Total Speakers</th>
      <th>Language Origin</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>English</td>
      <td>1,132 million</td>
      <td>Indo-European</td>
    </tr>
    <tr>
      <td>2</td>
      <td> Chinese</td>
      <td>1,117 million</td>
      <td>Sino-Tibetan</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Hindi</td>
      <td>615 million</td>
      <td>Indo-European</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Spanish</td>
      <td>534 million</td>
      <td>Indo-European</td>
    </tr>
    <tr>
      <td>5</td>
      <td>French</td>
      <td>280 million</td>
      <td>Indo-European</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Arabic</td>
      <td>274 million</td>
      <td>Afro-Asiatic</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Bengali</td>
      <td>265 million</td>
      <td>Indo-European</td>
    </tr>
     <tr>
       <td>8</td>
       <td>Russian</td>
       <td>258 million</td>
       <td>Indo-European</td>
      </tr>
     
        </tbody>
      </Table>
       </div>
        </div>
       
       
       <div className="chart-description">
       <div>
       <h1>Most Spoken Languages Worldwide</h1>
        <p>Even though you’re reading this article in English, there’s a good chance it might not be your mother tongue. Of the billion-strong English speakers in the world, only 33% consider it their native language.The popularity of a language depends greatly on utility and geographic location. Additionally, how we measure the spread of world languages can vary greatly depending on whether you look at total speakers or native speakers.Today’s detailed visualization from WordTips illustrates the 100 most spoken languages in the world, the number of native speakers for each language, and the origin tree that each language has branched out from.</p>
       </div>
       <div>
         <h1>Which Languages Have the Most Speakers?</h1>
         <p>It comes as no surprise that English reigns supreme, with over 1.1 billion total speakers—or roughly 15% of the global population.  Chinese, Hindi, Spanish, and French round out the top five.</p>
       </div>
       <div>
         <h1>What About Second (L2) Languages?</h1>
         <p>Nearly 43% of the world’s population is bilingual, with the ability to switch between two languages with ease.

            From the data, second language (L2) speakers can be calculated by looking at the difference between native and total speakers, as a proportion of the total. For example, 66% of English speakers learned it as a second language.</p>
        </div>
    
       </div>
      
       </div>
      
    );
     
    
};
/*exporting chart to app.js  */
export default  Chart;