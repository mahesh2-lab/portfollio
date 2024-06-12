import { useState } from 'react'
import { delay, motion } from 'framer-motion'
import { Links } from './Links/Links'
import './sidebar.scss'
import { ToogleButton } from './toogleButton/ToogleButton'


export const SideBar = () => {
    const [open, setOpen] = useState(false)

  const varients = {
    open:{
      clipPath: 'circle(2000px at 50px 50px)',
      transition:{
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    },
    closed:{
      clipPath: 'circle(20px at 50px 50px)',
      transition:{
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  }

  return ( 
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
        <motion.div className="bg" variants={varients}>
            <Links/>
        </motion.div>
        <ToogleButton setOpen={setOpen}/>
    </motion.div>
  )
}
