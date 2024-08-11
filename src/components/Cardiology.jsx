"use client";
import React from "react";
import HeaderP from "./HeaderProfile"; // Adjust the import path based on your project structure
// import { use, client } from 'next/navigation';
import Image from "next/image";
import "./Cardiology.css";

const doctors = [
  {
    name: "Dr. A K Bardhan",
    qualifications: "MBBS (1971), MD (1979), Dip. Card. (1976), FCCP",
    registration: "4228",
    languages: "English, বাংলা, हिंदी",
    experience: "30 years experience overall",
    location: "Canal Circular Road, Kolkata",
    availability: "MON, FRI (11:00 AM-12:00 PM)",
    image: "/path/to/image1.jpg",
  },
  {
    name: "Dr. A Sreenivas Kumar",
    qualifications: "MBBS, MD(Gen Med), DM(Cardiology)SGPGI, FACC(USA)",
    registration: "1541624",
    languages: "English",
    experience: "20 years experience overall",
    location: "Jubileehills, Hyderabad",
    availability: "MON-FRI, MON-SAT (09:00 AM-05:30 PM)",
    image: "/path/to/image2.jpg",
  },
  // Add other doctors similarly...
];

const Cardiology = () => {
  // const navigation = client(use);

  const handleBookAppointment = () => {
    const isLoggedIn = false; // Replace this with actual login check
    if (isLoggedIn) {
      navigation.push("/booking");
    } else {
      navigation.push("/login");
    }
  };

  return (
    <div>
      <HeaderP />
      <div className="cardiology-container">
        <h1>Best Cardiologists we have</h1>
        <div className="doctors-container">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <Image
                src={doctor.image}
                alt={doctor.name}
                className="doctor-image"
                width={200}
                height={200}
              />
              <div className="doctor-details">
                <h2>{doctor.name}</h2>
                <p>{doctor.qualifications}</p>
                <p>
                  <strong>Registration No:</strong> {doctor.registration}
                </p>
                <p>
                  <strong>Language:</strong> {doctor.languages}
                </p>
                <p>
                  <strong>Experience:</strong> {doctor.experience}
                </p>
                <p>
                  <strong>Location:</strong> {doctor.location}
                </p>
                <p>
                  <strong>Availability:</strong> {doctor.availability}
                </p>
                <button
                  onClick={handleBookAppointment}
                  className="book-appointment-button"
                >
                  BOOK AN APPOINTMENT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardiology;
