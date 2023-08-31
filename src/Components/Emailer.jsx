import React,{useState} from 'react'
import {Button, Card,TextField} from '@mui/material'
import DateTimePicker from 'react-datetime-picker';
import { styled } from '@mui/material/styles';
// import  { ButtonProps } from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
// import axios from 'axios'
// import DateTimePicker from 'react-datetime-picker'

function Emailer() {
  const [reminderMsg,setReminderMsg]=useState("")
  const [reminderAt,setReminderAt]=useState("")


  // color for the mui button
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[100],
    '&:hover': {
      backgroundColor: grey[500],
    },
  }));


  // Button Function 
  const addReminder = () => {

  } 
  return (
    <>
      <div className=''>
<div className='w-96 mx-auto mt-20 drop-shadow-lg '>
  <Card >
    <div className='bg-gray-800'>
    <h1 className='text-white flex justify-center pt-10 text-2xl font-semibold'>Remind Me 🙋‍♂️</h1>
    <div className='mx-20 py-5 drop-shadow-lg'>
    <TextField className='bg-gray-100 flex justify-center' label="Remind notes here" variant="filled" size='small' value={reminderMsg} 
    onChange={e => setReminderMsg}/>
    </div>
  <div className='flex justify-center drop-shadow-lg'>
    <DateTimePicker
   value={reminderAt}
   onChange={setReminderAt}
   minDate={new Date()}
   minutePlaceholder="mm"
   hourPlaceholder="hh"
   dayPlaceholder="DD"
   monthPlaceholder="MM"
   yearPlaceholder="YYYY"
    />
  </div>
  <div className='flex justify-center py-5 drop-shadow-lg'>
  <ColorButton variant="contained" onClick={addReminder}>Contained</ColorButton>
  </div>
    </div>

  </Card>
</div>
      </div>
    </>
  )
}

export default Emailer
