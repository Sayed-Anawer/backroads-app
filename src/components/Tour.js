import React from 'react'

const Tour = ({
  tour: { id, title, image, text, location, duration, cost, tourTime },
}) => {
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{tourTime}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour

