import React, { useState } from 'react'

const ProfileForm = ({submit}) => {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    })


    const handleChange = (e) => {
        const {name, value} = e.target
        setProfile(prevState => ({...prevState, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(profile);
        submit(profile)
    }

  return (
  <form onSubmit={handleSubmit}>
      <fieldset>
          <legend>Personal Information</legend>
          <input type="text" 
          name="firstName" 
          onChange={handleChange} 
          value={profile.firstName}/>

          <input type="text"
          name="lastName" 
          onChange={handleChange}
          value={profile.lastName}/>

          <input type="email" 
          name="email"
          onChange={handleChange}
          value={profile.email}/>

          <input type="tel"
          name="phone"
          onChange={handleChange}
          value={profile.phone}/>
      </fieldset>
      <button>Submit</button>
  </form>
  )}

export default ProfileForm