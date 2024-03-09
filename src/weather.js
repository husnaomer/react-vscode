import React from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
export default function Weather(props) {
  function handleResponse(response) {
    alert(`the weather in ${props.city} is ${response.data.main.temp}`);
  }
  let apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
