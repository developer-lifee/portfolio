import React from 'react'
import { FadeInOnScroll } from '../FadeInOnScroll/FadeInOnScroll.jsx'

import './Contact.css';

function Contact() {
  return (
    <FadeInOnScroll>
        <div className='contact' id='#contact'>
            <p>
            If you have a question, proposal, project or want to work on something together, just send me a message.
            
            </p>
            <div className='whatsapp'>
                <a href="https://wa.me/qr/3PZEXTUCTWFNL1"  target="_blank"><img src="./whatsapp.svg" alt="" /></a>
            </div>
        </div>
    </FadeInOnScroll>
  )
}

export {Contact}
