import React from 'react'
import { Link } from "react-router-dom"
import "./EventFlyer.scss"

export default function EventFlyer({imageSource, alt, link}) {
  return (
    <div className="event-flyer">
      <Link>
        <img src={imageSource} alt={alt} link={link} />
      </Link>
    </div>
  )
}
