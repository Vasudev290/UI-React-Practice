import React from 'react'

const ContactDetails = (props) => {
  return (
    <div>
      <h3>Contact Details</h3>
        <pre>{JSON.stringify(props.contact)}</pre>
        <div className="card">
          <div className="card-header bg-primary">
            <img src={props.contact.picture.large} alt="" />
          </div>
          <div className="card-body bg-info">
            <ul className='list-group'>
              <li className='list-group-item'>{props.contact.name.first}</li>
              <li className='list-group-item'>{props.contact.email}</li>
              <li className='list-group-item'>{props.contact.location.country}</li>
              <li className='list-group-item'>{props.contact.dob.date}</li>
              <li className='list-group-item'>{props.contact.dob.age}</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default ContactDetails