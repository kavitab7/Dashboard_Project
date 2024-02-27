import React from 'react'
import '../styles/home.css'
import GraphChart from '../components/GraphChart'
import PieChartBox from '../components/PieChartBox'
import UserBox from '../components/UserBox'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../styles/responsive.css'
const Home = () => {
    return (
        <>
            <div className="grid-container">
                <div className="box box1 ">
                    <div className="text-box"><h3>Welcome to LearnHub <WavingHandIcon /></h3>
                        <button>Explore More<ArrowOutwardIcon /></button>
                    </div>
                    <div className="box1-img"></div>
                </div>
                <div className="box box2"><UserBox /></div>
                <div className="box box7"><PieChartBox /></div>
                <div className="box box3" style={{ background: '#6aeb74' }} ><div className="inner-box">
                    <div className="icon-box" style={{ color: '#6aeb74' }}><PeopleIcon /></div>
                    <h4 className="number">4500</h4></div>
                    <h3>Students</h3>
                </div>
                <div className="box box4" style={{ background: 'rgb(103 143 255)' }} >
                    <div className="inner-box">
                        <div className="icon-box" style={{ color: 'rgb(103 143 255)' }}><SchoolIcon /></div>
                        <h4 className="number">345</h4></div>
                    <h3>Teachers</h3>
                </div>
                <div className="box box5" style={{ background: 'rgb(255 103 124)' }} >
                    <div className="inner-box">
                        <div className="icon-box" style={{ color: 'rgb(255 103 124)' }}><LibraryBooksIcon /></div>
                        <h4 className="number">567</h4></div>
                    <h3>Courses</h3>
                </div>


                <div className="box box6"><GraphChart /></div>
                {/* <div className="box box8">box8</div> */}
            </div>
        </>
    )
}

export default Home