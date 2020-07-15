import React from 'react'

export const MyPointer = (props: {clientY: number, clientX: number}) => {
  const { clientY, clientX } = props;
  return (
    <div
      style={{
        position: 'fixed',
        fontSize: 12,
        left: clientX,
        top: clientY,
        transform: 'translate(-50%)',
      }}
    >
    <span role="img" aria-label="pointer" >
      💢
    </span>
    </div>
  )
}


export default MyPointer
