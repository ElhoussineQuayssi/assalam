import React from 'react';

const ListItem = ({text}) => {
  return (
    <div className='backdrop-blur-lg p-2 text-lg font-semibold border border-2 hover:border-b-2 hover:border-b-black cursor-pointer hover:-translate-x-2 duration-700'>
      {text}
    </div>
  )
}

export default ListItem
