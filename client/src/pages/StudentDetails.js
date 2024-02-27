import React from 'react'
import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { singleStudent } from '../components/userData';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Button from '@mui/material/Button';
import '../styles/studentDetails.css';
import '../styles/responsive.css'
const StudentDetails = () => {
    return (

        <div className="single-student">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {singleStudent.img && <img src={singleStudent.img} alt="" />}
                        <h1>{singleStudent.title}</h1>
                        <Button variant="contained" endIcon={<AppRegistrationIcon />}>
                            Update
                        </Button>
                    </div>
                    <div className="details">
                        {Object.entries(singleStudent.info).map((item) => (
                            <div className="item" key={item[0]}>
                                <span className="itemTitle">{item[0]} : </span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                {singleStudent.chart && (
                    <div className="chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={singleStudent.chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {singleStudent.chart.dataKeys.map((dataKey) => (
                                    <Line
                                        type="monotone"
                                        dataKey={dataKey.name}
                                        stroke={dataKey.color}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
            <div className="courses">
                <h2>Courses Taken </h2>
                {singleStudent.courses && (
                    <ul className='box'>
                        {singleStudent.courses.map((course) => (
                            <li key={course.text}>
                                <div className='course-box  ' >
                                    <div className={course.img} ></div>
                                    <div className="text">
                                        <p>{course.text}</p>
                                        <p>{course.time}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default StudentDetails