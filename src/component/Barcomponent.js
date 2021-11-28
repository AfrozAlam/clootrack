import { useState } from 'react'
import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar, Cell } from 'recharts'
import randomColor from "randomcolor"
 
const Barcomponent = ({data}) => {
    const [bar,setBar] = useState(data.map((item,index) => ({name: index, value: item})))

    return (
        <BarChart width={730} height={250} data={bar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value">{bar.map((item,index) => <Cell key={index} onClick={() => {
                let temp = prompt(`Change the value for X : ${item.name}, Y : ${item.value}`, item.value)
                temp = temp === null ? item.value : Number(temp);
                let tempBar = [...bar]
                tempBar.splice(item.name,1,{name:item.name,value:temp})
                setBar(tempBar)
            }} fill={randomColor()} />)}</Bar>
        </BarChart>
    )
}

export default Barcomponent