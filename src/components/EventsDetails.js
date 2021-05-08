import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../config/firebase";

export default function EventsDetails() {
  const [event, setEvent] = useState();
  const [ticketTypes, setTicketTypes] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEvent = async (eventId) => {
      const response = await db.collection("events").doc(eventId).get();
      setEvent(response.data());
    };
    fetchEvent(eventId);
  }, [eventId]);

  useEffect(() => {
    const fetchTicketTypes = async (eventId) => {
      const response = await db
        .collection("events")
        .doc(eventId)
        .collection("ticketTypes").orderBy('price')
        .get();
      const ticketTypes = [];
      response.docs.forEach((ticketType) => {
        ticketTypes.push({ id: ticketType.id, ...ticketType.data() });
      });
      setTicketTypes(ticketTypes);
    };
    fetchTicketTypes(eventId);
  }, [eventId]);

  

  if (!event) return <h1>Loading...</h1>;
  return (
    <div className="event-container">
      <h3 className="">
        <Link to={`/`}>Back</Link>
      </h3>
      <br />
      <h2>{event.title}</h2>
      <p>{event.desc}</p>
      <h4>Tickets:</h4>
      {ticketTypes &&
        ticketTypes.map((ticketType) => {
          return (
            <div>
              <p>{ticketType.type}: ₹{ticketType.price}</p>
            </div>
          );
        })}
    </div>
  );
}
