import React from 'react'
import { db } from '../config/firebase'
import { useAuth } from "../contexts/AuthContext"

export default function Payments() {
    const paymentRef = db.collection("payments").doc();
    const partyRef = db.collection("events")
    const { currentUser } = useAuth();

    paymentRef.set({
        userID: currentUser.uid,
    })
    return (
        <div>
            
        </div>
    )
}