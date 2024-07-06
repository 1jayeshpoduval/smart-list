import React from 'react'
import {AnimatePresence, circIn, circInOut, motion} from 'framer-motion'


const ListItem = (props) => {
  return (
    <>
    <ul>
      <AnimatePresence /* mode='popLayout' */>
        {props.items.map((item) => (
            <motion.li className='list-item'
            layout
            key={item.itemId}
            onMouseEnter={props.onItemHover}
            onMouseLeave={props.onItemLeave}
            initial={{
              scale:0,
            opacity: 1}}
            animate={{
              scale:1,
              opacity: 1}}
            transition={{
              type: 'spring',
              stiffness: 365,
              damping: 30}}
            exit={{
              scale: 0,
              opacity: 0.5,
              transition: {
                ease: circInOut,
                duration: 0.4
              }}}
            >{item.itemContent}
             <motion.button className='btn cc-close'
                onClick={() => props.onDelete(item)}
                >Delete
              </motion.button>
            </motion.li>
            
        ))}
        </AnimatePresence> 
    </ul>
    </>
  )
}

export default ListItem