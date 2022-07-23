import Cloud from './../../../assets/cloud.svg'
import Sunny from './../../../assets/sunny.svg'
import Rainy from './../../../assets/rainy.svg'
import Thunder from './../../../assets/thunder_rain.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faEye, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


function TemperatureWidget() {
    const fetchTemp = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=ba24c6018ddd72041749018d0c1b1ef8&units=metric').then(res => res.json()).then((res) => {
            setTemp(res.main.temp)
            setHumidity(res.main.humidity)
            setVisibility(res.visibility)
            setClouds(res.clouds.all)
            setPlace(res.name)
            console.log(res)

        })
    }
    const [temp, setTemp] = useState("0");
    const [humidity, setHumidity] = useState("0");
    const [visibility, setVisibility] = useState("0");
    const [clouds, setClouds] = useState("0");
    const [place, setPlace] = useState("0");

    useEffect(() => {
        fetchTemp();
    }
        , []);
    const API_RESPONSE = {
        temp: 39,
        location: "Bengaluru",
        humidity: 80,
        visibility: 40,
        precipitation: 20
    }
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-center'>

                <div className="relative flex flex-col items-center">
                    <span className="text-[5rem] md:text-[10rem]">{temp}<sup><span className="text-2xl"><sup>o</sup>c</span></sup></span>
                    <span className="text-2xl block mx-auto font-bold">{place}</span>
                </div>
                <div className=''><img src={Sunny} alt="" className='h-[30em]' /></div>
                <div className="relative flex flex-col items-center">
                    <div className='flex flex-col justify-start space-y-5'>
                        <span className="text-base font-bold"><FontAwesomeIcon icon={faDroplet} /> Humidity: {humidity}%</span>
                        <span className="text-base font-bold"><FontAwesomeIcon icon={faEye} /> Visibility: {visibility}</span>
                        <span className="text-base font-bold"><FontAwesomeIcon icon={faCloudShowersHeavy} /> Clouds: {clouds}%</span>
                    </div>
                    {/* <span className="text-2xl block mx-auto font-bold">{API_RESPONSE.location}</span> */}
                </div>
            </div>
        </>
    )
}

export default TemperatureWidget;