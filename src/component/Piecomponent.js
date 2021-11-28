import { useState } from "react"
import { PieChart,Pie,Tooltip,Cell } from "recharts"
import randomColor from "randomcolor"

const Piecomponent = ({data}) => {
    const [pie,setPie] = useState(data.map((item,index) => ({name: index, value: item})))
    return (
        <PieChart width={730} height={250}>
            <Pie data={pie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} label>
                {pie.map((item,index) => <Cell key={index} onClick={() => {
                    let temp = prompt(`Change the value for X : ${item.name}, Y : ${item.value}`, item.value)
                    temp = temp === null ? item.value : Number(temp);
                    let tempPie = [...pie]
                    tempPie.splice(item.name,1,{name:item.name,value:temp})
                    setPie(tempPie)
                }} fill={randomColor()} />)}
            </Pie>
            <Tooltip />
        </PieChart>
    )
}

export default Piecomponent