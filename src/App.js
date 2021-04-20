import React,{useState} from 'react'
import { fetchCases } from './api/fetchCases';
import { Input,Divider, Image, Statistic,Segment  } from 'semantic-ui-react'
import './App.css';

export default function App() {


        const [country, setCountry] = useState('');
        const [cases, setCases] = useState('');

            const searchCountry = async  (e) => {
                if(e.key  === "Enter" )
                {
                    const data  = await fetchCases(country)
                    setCases(data);
                    setCountry('');
                }

            }

    return (
        <>
        <div  className="name">
            <h1>Country Covid Tracker</h1>  </div>
            <div className="input-search" >
            <Input 
            type="text"
            className = "search"
            placeholder="Enter Country..."
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onKeyPress={searchCountry}   
               />     
            </div>


     <div className="result"  style={{ opacity:"0.9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      { cases &&  <Segment inverted  >
        <Image src={cases.countryInfo.flag} size='tiny' verticalAlign='middle' alt={cases.country} /> <strong>Covid-19 in {cases.country}</strong>
   <Divider/>
    <Statistic color='red' inverted>
      <Statistic.Value><strong>{cases.todayCases}</strong></Statistic.Value>
      <Statistic.Label>New Cases Today</Statistic.Label>
    </Statistic>
    <br/>
    <Statistic color='purple' inverted>
      <Statistic.Value><strong>{cases.active}</strong></Statistic.Value>
      <Statistic.Label>Active Cases</Statistic.Label>
    </Statistic>
    <br/>
    <Statistic color='violet' inverted>
      <Statistic.Value><strong>{cases.cases}</strong></Statistic.Value>
      <Statistic.Label>Total Cases</Statistic.Label>
    </Statistic>
    <br/>
    <Statistic color='orange' inverted>
      <Statistic.Value><strong>{cases.todayDeaths}</strong></Statistic.Value>
      <Statistic.Label>New Deaths</Statistic.Label>
    </Statistic>
    
    <Statistic color='brown' inverted>
      <Statistic.Value><strong>{cases.deaths}</strong></Statistic.Value>
      <Statistic.Label>Total Deaths</Statistic.Label>
      </Statistic>
    <br/>
    <Statistic color='olive' inverted>
      <Statistic.Value><strong>{cases.todayRecovered}</strong></Statistic.Value>
      <Statistic.Label>New Recoveries</Statistic.Label>
    </Statistic>
    <br/>
    <Statistic color='green' inverted>
      <Statistic.Value><strong>{cases.recovered}</strong></Statistic.Value>
      <Statistic.Label>Total Recovered</Statistic.Label>
    </Statistic>
    <Divider/>
<figcaption>Source: Worldodometers</figcaption> 
  </Segment>}
            </div>
    </>)
}
