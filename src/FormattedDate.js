import React from "react";


export default function FormattedDate(props){

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[props.date.getDay()];

    let date = props.date.getDate();

    const months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[props.date.getMonth()];
    let hours = props.date.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    


    return (
        <div>{day}, {date} {month}, {hours}:{minutes}</div>
    );
}