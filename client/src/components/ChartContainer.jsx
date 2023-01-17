import React,{useState} from 'react';
import BarCharts from './BarChart';  
import AreaCharts from './AreaCharts';
import {useAppContext} from '../constext/appContext';
import Wrapper from '../assets/wrappers/ChartsContainer'

const ChartContainer = () => {

  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications : data} = useAppContext();


  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={()=> setBarChart(!barChart)} >
        {barChart? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart? <BarCharts data={data}/> : <AreaCharts data={data}/>}
    </Wrapper>
  )
}

export default ChartContainer