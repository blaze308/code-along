import logo from "./logo.svg";
import "./App.css";
//import writers from "./writers";
import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
import ProfileForm from "./components/ProfileForm"

function App() {
  const [allProfile, setAllProfile] = useState([
    {
      firstName: "Hannah",
      lastName: "Montana",
      email: "hannah.montana@gmail.com",
      phone: "+233 024 567 988"
    }
  ]);


  const submit = (profile) => {
    // const arr = allProfile
    // arr.push(profile)
    setAllProfile([...allProfile, profile ])
  }

  return (
    <div>
      <h1>Writer Profiles</h1>

      <ProfileForm submit={submit}/>
      <div className="container">        
          {allProfile.map((writer) => (
            <ProfileCard key={writer.id} writer={writer}/>
          ))
        }
      </div>
      </div>
    )
  }


export default App;
