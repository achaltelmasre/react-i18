import React from 'react';
import I18n from "./../../utils/I18n";
import "./Home.css";


function Home() {

  const usersCount  = 20;

  return (
    <div className='container'>
      <h1>{I18n("headingMessage")}</h1>

      <select className='langague'
        defaultValue={localStorage.getItem("lang")}
        onChange={(e) =>{
        localStorage.setItem("lang", e.target.value);
        window.location.reload();
      }}>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
      </select>

      <h4>{I18n("normalMessage")}</h4>

      <p>{I18n( "textMessage")}</p>
      

      <p>
       {I18n("usersStateMessage",  "<studentCount>", usersCount)}
      </p>

    </div>
  )
}

export default Home