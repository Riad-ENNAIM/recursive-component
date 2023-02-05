import { useState } from 'react';

const RecursiveComponent = ({ data }) => {
  const [itemsStatus, setItemsStatus] = useState({});

  const updateItemStatus = id => {
    setItemsStatus({ ...itemsStatus, [id]: !itemsStatus[id] })
  }
  return (
    <>
      {data.map(item => (
        <div key={item.id} className='container'>
          {item.children ? (
            <>
              <span className='withChildren' onClick={() => updateItemStatus(item.id)}>
                {item.title}
              </span>
              <div style={{ display: !itemsStatus[item.id] && "none" }}>
                <RecursiveComponent data={item.children} />
              </div>
            </>
          ) :
            <span className='withoutChildren'>{item.title}</span>
          }
        </div>
      ))}
    </>
  )
}

export default RecursiveComponent;
