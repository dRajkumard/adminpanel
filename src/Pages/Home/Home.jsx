import React from 'react'
import './Home.css'
import Featureinfo from '../../components/Featuresinfo/Featureinfo'
import Chart from '../../components/Chart/Chart'
import { UserData } from '../../dummydata'
import Widgetsm from '../../components/Widgetsm/Widgetsm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
const Home = () => {
  return (
    <div className='home'>
        <Featureinfo/>
        <Chart data={UserData} title="UserAnalytics" grid datakey="ActiveUser"/>
        <div className="homeWidgets">
          <Widgetsm/>
          <WidgetLg/>
        </div>
        </div>
  )
}

export default Home