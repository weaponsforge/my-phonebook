import ContactListComponent from '@/components/contactList'
import { useSyncGlobalVariable } from '@/lib/hooks/useSync'
import { useEffect, useState } from 'react'


const defaultState = {
  contacts:[
    {
      doc_id:'somerandomid',
      first_name:'zirst',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'scond',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'ads',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'zirst',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'scond',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'bds',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'cdsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'zirst',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'dcond',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'eds',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'edsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'zirst',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'fcond',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'gds',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'adsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'zirst',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'scond',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'%ds',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'#dsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'zirst',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'scond',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'%ds',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'#dsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'zirst',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'scond',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'%ds',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'#dsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'zirst',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'scond',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'%ds',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'#dsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'zirst',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'scond',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'%ds',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },
    {
      doc_id:'somerandomid',
      first_name:'#dsad',
      last_name:'third',
      middle_name:'second',
      date_created:new Date(),
      date_updated:new Date(),
      contact_no:'somerandomnumber',
      contact_email:'somerandomemail'
    },

  ]
}

function ContactList () {
  const [state, setState] = useState(defaultState)

  const eventsHandler = () => {

  }
  return (
    <ContactListComponent
      state={state}
      eventsHandler={eventsHandler}
    />
  )
}

export default ContactList
