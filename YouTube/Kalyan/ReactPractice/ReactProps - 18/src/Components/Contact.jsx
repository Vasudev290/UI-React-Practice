import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import ContactDetails from './ContactDetails'
import ContactList from './ContactList'

const Contact = () => {
    const [contact, setContact] = useState([])
    const [selContact, setSelContacts] = useState({})

useEffect(() => {
    Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist") 
    .then((res) => {setContact(res.data)})
    .catch((err) => {
        console.log(err)
    })
}, [])
let useSelectedContact = (contact) => {
    console.log(contact.name.first)
    setSelContacts(contact)
}
  return <>
        <h2>Contact App</h2>
        <div className="container">
            <pre>{JSON.stringify(contact)}</pre>
            <pre>{JSON.stringify(selContact)}</pre>
            {
                contact.length > 0 ? <> 
                <div className="row">
                <div className="col-8">
                    {/* Contact List */}
                    <ContactList Users={contact} selContact={useSelectedContact}/>
                </div>
                <div className="col-4">
                    {/* Contact Details */}
                    {
                        Object.keys(selContact).length > 0 ? <>
                        <ContactDetails contact={selContact}/>
                        </> : <>No Data</>
                    }
                </div>
            </div>
                 </> : <h3>No Data</h3>
            }
        </div>
    </>
  
}

export default Contact