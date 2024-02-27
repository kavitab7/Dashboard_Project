import React from 'react'
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
const GraphChart = () => {

    const courseData = [
        {
            month: "January",
            webDevelopment: 4599,
            machineLearning: 1799,
            graphicDesign: 2999,
        },
        {
            month: "February",
            webDevelopment: 5499,
            machineLearning: 4499,
            graphicDesign: 3499,
        },
        {
            month: "March",
            webDevelopment: 2939,
            machineLearning: 3239,
            graphicDesign: 1009,
        },
        {
            month: "April",
            webDevelopment: 5999,
            machineLearning: 4299,
            graphicDesign: 2099,
        },
        {
            month: "May",
            webDevelopment: 5459,
            machineLearning: 1229,
            graphicDesign: 3499,
        },
        {
            month: "June",
            webDevelopment: 6499,
            machineLearning: 5499,
            graphicDesign: 4499,
        }
    ];

    return (
        <div className="graph-chart">
            <h3>Revenue Analysis</h3>
            <ResponsiveContainer width="99%" height="90%">
                <AreaChart width={730} height={250} data={courseData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="webDevelopment" stackId="1" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="machineLearning" stackId="1" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    <Area type="monotone" dataKey="graphicDesign" stackId="1" stroke="#ffc658" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    )
}

export default GraphChart