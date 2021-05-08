import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function EventsDetails() {

    const { eventId } = useParams();

    useEffect(() => {
        
    }, [eventId])

    return (
        <div>
            {eventId}
        </div>
    )
}