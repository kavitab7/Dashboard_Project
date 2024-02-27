import React from 'react'
import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts'
const PieChartBox = () => {
    const data = [
        {
            name: "Web Development",
            value: 400,
            color: "#6aeb74" // Matte color
        },
        {
            name: "Machine Learning",
            value: 300,
            color: "rgb(103 143 255)" // Matte color
        },
        {
            name: "Graphic Design",
            value: 550,
            color: "rgb(251 82 106)" // Matte color
        },
        {
            name: "Data Science",
            value: 200,
            color: "#FF8A64" // Matte color
        },
        {
            name: "Digital Marketing",
            value: 278,
            color: "rgb(178 82 251)" // Matte color
        }
    ];
    return (
        <>
            <div className="pie-chart">

                <ResponsiveContainer width="99%" height="90%">
                    <PieChart width={730} height={250}>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>

                    </PieChart>
                </ResponsiveContainer>
                <div className="options">
                    <h3>Courses</h3>
                    {data.map((item) => (
                        <div className="option" key={item.name}>
                            <div className="title">
                                <div className="dot" style={{ background: item.color }} />
                                <span >{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PieChartBox