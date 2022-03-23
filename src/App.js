import logo from "./logo.svg";
import "./App.css";
//import writers from "./writers";
import { ProfileCard } from "./ProfileCard";
import { useEffect, useState } from "react";

function App() {
  const [writers, setWriters] = useState([]);
 
  useEffect (() => {
    const getWriters = async () => {
      const response = await fetch("./writers.json")
      const data = await response.json()
      setWriters(data)
    }
    getWriters()
  }, [])
  return (
    <div>
      <h1>Writer Profiles</h1>

      <div className="container">
        {writers.map((writer) => (
          <ProfileCard writer={writer}/>

          // <div className="card">
          //   <img
          //     src={`/images/${writer.avatar}.png`}
          //     height="300px"
          //     width="300px"
          //     alt=""
          //   />

          //   <div className="textGroup">
          //     <h3>{writer.name}</h3>
          //     <p>{writer.email}</p>
          //     <p>{writer.phone}</p>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default App;
