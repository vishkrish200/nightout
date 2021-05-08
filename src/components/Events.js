import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db, storage } from "../config/firebase";
import EventsDetails from "./EventsDetails";

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
      e.push({ id: item.id, ...item.data() });
    });
    setEvents(e);
  };

  return (
    <div>
      {events &&
        events.map((e) => {
          return (
            <Link to={`/events/${e.id}`}>
              <Card>
                <div className="event-container">
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </div>
                <br />
              </Card>
            </Link>
          );
        })}
    </div>
  );
}
