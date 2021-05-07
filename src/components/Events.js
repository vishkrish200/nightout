import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { db, storage } from "../config/firebase";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = db.collection("events").orderBy("title");
    const data = await response.get();
    const e = [];
    data.docs.forEach((item) => {
      e.push(item.data());
    });
    setEvents(e);
  };

  return (
    <div>
      {events &&
        events.map((e) => {
          return (
            <Card>
              <div className="event-container">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <p>Price: {e.price}</p>
              </div>
              <br />
            </Card>
          );
        })}
    </div>
  );
}
