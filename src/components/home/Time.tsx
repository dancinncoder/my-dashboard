import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

type TimeType = {
  year: number;
  month: string;
  date: number;
  day: string;
  hour: number;
  minute: number;
  second: number;
};

const TimeInnerContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    font-size: 90px;
    margin: 0;
  }

  h2 {
    align-items: flex-end;
    display: flex;
    height: 100%;
    margin: 0;
    position: absolute;
    right: -35px;
    bottom: 37px;
  }

  h4 {
    color: #ddd;
    font-size: 15px;
    font-weight: 500;
    margin: 10px 0 0;
    width: 100%;
    text-align: center;
  }
`;

const TimeContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  height: 150px;
  justify-content: center;
  padding: 25px 25px 25px 10px;
  width: 350px;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transition: ease-out 0.3s;

    ${TimeInnerContainer} h4 {
      color: #807f7f;
      transition: ease-out 0.3s;
    }
  }
`;

function Time() {
  const getTime = () => {
    const months: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = months[currentTime.getMonth()];
    let date = currentTime.getDate();
    let day = days[currentTime.getDay()];
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    return { year, month, date, day, hour, minute, second };
  };

  const [clock, setClock] = useState<TimeType>(getTime);

  useEffect(() => {
    const timer = setInterval(() => setClock(getTime), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <TimeContainer>
      <TimeInnerContainer>
        <h1>{`${clock.hour < 10 ? `0${clock.hour}` : clock.hour} : ${
          clock.minute < 10 ? `0${clock.minute}` : clock.minute
        }`}</h1>
        <h2>{`${clock.second < 10 ? `0${clock.second}` : clock.second}`}</h2>
        <h4>
          {clock.day},&nbsp;
          {clock.date}&nbsp;
          {clock.month}&nbsp;
          {clock.year}
        </h4>
      </TimeInnerContainer>
    </TimeContainer>
  );
}

export default Time;
