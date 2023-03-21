import ContactListComponent from '@/components/contactList'
import { fetchCreateContact } from '@/lib/store/contacts/contactsThunk'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const defaultState = {
  contacts: [
    {
      first_name: 'zirst',
      middle_name: 'second',
      last_name: 'third',
      phone_number: 'somerandomnumber',
      email_address: 'somerandomemail',
      user_uid:'ad2321414'
    }
  ]
}

function Contacts() {
  const contacts = useSelector((state)=>state.contacts.entities)
  const [state, setState] = useState(contacts)
  console.log(contacts)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCreateContact({
      first_name: 'first',
      middle_name: 'second',
      last_name: 'tsshird',
      phone_number: 'somerandomnumber',
      email_address: 'somerandomemailss',
      user_uid:'wtghuScAMuaWp0AKI7OKTBEwKb02'
    }))
  },[])

  const eventsHandler = () => {

  }
  return (
    <>
      {/* <ContactListComponent
        state={state}
        eventsHandler={eventsHandler}
      /> */}
    </>
  )
}

export default Contacts
