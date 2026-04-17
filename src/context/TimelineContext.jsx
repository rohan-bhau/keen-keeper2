"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  console.log(timeline);

  useEffect(() => {
    const savedData = localStorage.getItem("timeline")
    if (savedData) {
      setTimeline(JSON.parse(savedData))
    }
  },[])

  useEffect(() => {
    if (timeline.length > 0) {
      localStorage.setItem("timeline",JSON.stringify(timeline))
    }
  },[timeline])

    const addToTiemeline = (name, type) => {
      const now = new Date();
    const newData = {
      id: Date.now(),
      date: now.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      type: type,
      title: `${type} with ${name}`,
      
    };
    toast.success(`${type} added for ${name}!`);

    setTimeline((prev) => [...prev, newData]);
    console.log(timeline);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addToTiemeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
