import ContactListComponent from '@/components/contactList'
import { useSyncFirestore } from '@/lib/hooks/useSyncFirestore'
import { useState, useSyncExternalStore } from 'react'
import Button from '@mui/material/Button'
import { useSyncGlobalVariable } from '@/lib/hooks/useSync'


const defaultState = {
  contacts: [
    {
      doc_id: 'somerandomid',
      first_name: 'zirst',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'scond',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'ads',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'zirst',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'scond',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'bds',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'cdsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'zirst',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'dcond',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'eds',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'edsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'zirst',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'fcond',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'gds',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'adsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'zirst',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'scond',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '%ds',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '#dsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'zirst',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'scond',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '%ds',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '#dsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'zirst',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'scond',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '%ds',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '#dsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'zirst',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'scond',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '%ds',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '#dsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'zirst',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: 'scond',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '%ds',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },
    {
      doc_id: 'somerandomid',
      first_name: '#dsad',
      last_name: 'third',
      middle_name: 'second',
      date_created: new Date(),
      date_updated: new Date(),
      contact_no: 'somerandomnumber',
      contact_email: 'somerandomemail'
    },

  ]
}

function ContactList() {
  const [state, setState] = useState(defaultState)
  // const [model, setModel, status] = useSyncFirestore('config','configData')
  const sortedContacts = [...state.contacts].sort((a, b) => a.first_name < b.first_name ? -1 : 1)
  useState(() => {
    setState(prev => ({
      ...prev,
      contacts: sortedContacts
    }))
  }, [])

  const clickHandler = () => {
    // if (!model.number) {
    //   setModel({number: 1})
    // }
    // setModel({
    //   ...model,
    //   number:model.number + 1
    // })

    // console.log(model, status)
  }
  const eventsHandler = () => {

  }
  return (
    <>
      {/* {model?.number ?? ''}
      <Button onClick={clickHandler}>click</Button> */}
      <ContactListComponent
        state={state}
        eventsHandler={eventsHandler}
      />
    </>
  )
}

export default ContactList
