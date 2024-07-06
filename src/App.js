import './App.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import ListItem from './ListItem';
import {motion} from 'framer-motion'


function App() {

  const [items, setItems] = useState([])
  const [itemHover, setItemHover] = useState(false)
  
  function onItemHover () {
    setItemHover(true)
  }

  function onItemLeave () {
    setItemHover(false)
  }

  function addItem() {
    setItems([...items, {
      item: items.length + 1,
      itemId: uuidv4(),
      itemContent: <div className='u-text-grey'> This is item number
        <span className='u-text-orange u-font-weight-600 u-ml-0.25'>
        {items.length + 1}
        </span> 
      </div>
    }])
  }
  
  function deleteItem (item) {
    const itemsArray = [...items]
    const index = itemsArray.indexOf(item)
    if (index > -1) { 
     itemsArray.splice(index, 1)
    
    const updatedItems = itemsArray.map((item, itemPosition) => ({
      ...item,
      itemContent: <div className='u-text-grey'> This is item number
      <motion.span className='u-text-orange u-font-weight-600 u-ml-0.25'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8}}
      key={itemPosition}>
      {itemPosition + 1}
      </motion.span> 
      </div> 
    })) 
     setItems(updatedItems)
    }

  }


  return (
    <div className="u-bg-yellow">
      <header className="header">
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <ListItem items={items}
               setItems = {setItems}
               onDelete = {deleteItem} 
               onItemHover={onItemHover} 
               onItemLeave={onItemLeave}
               itemHover={itemHover}
               setItemHover={setItemHover}/>
            </div>
            <motion.button className='btn'
             onClick={addItem}
             initial={{backgroundColor: '#FF5400'}}
             whileHover={{backgroundColor: '#EB4E00'}}
             transition={{duration: 0.15}}>Add Item</motion.button>
          </div>
        </section>  
      </header>
    </div>
  );
}

export default App;
