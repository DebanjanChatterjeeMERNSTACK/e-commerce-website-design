import React, { useState } from "react";
import "./Profile.css";
import profileimage from "../../assets/3.jpg";
import { FaRegEdit } from "react-icons/fa";
import { LuSave } from "react-icons/lu";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    address: "123 Main St",
    city: "Kolkata",
    state: "West Bengal",
    zip: "700001",
    dob: "1995-05-15",
    gender: "Male",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="profile_container">
      <div className="profile_card">
        {isEditing ? (
         <span className="edit_icon" onClick={handleSave}>
          <LuSave  /> 
        </span>):(
        <span className="edit_icon" onClick={handleEditToggle}>
          <FaRegEdit /> 
        </span>)}
        <div className="profile_header">
          <div className="profile_img">
            <img src={profileimage} alt="Profile" />
          </div>
          <h2>{profile.fullName}</h2>
          <p>{profile.email}</p>
        </div>

        <div className="profile_form">
          <div className="form_group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form_group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form_group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form_group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form_group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={profile.city}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form_group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={profile.state}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form_group">
            <label>ZIP</label>
            <input
              type="text"
              name="zip"
              value={profile.zip}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form_group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form_group">
            <label>Gender</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
