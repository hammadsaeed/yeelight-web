import React from 'react'

export const MyPointer = (props: {clientY: number, clientX: number}) => {
  const { clientY, clientX } = props;
  console.log(clientX, clientY)
  return (
    <div
      style={{
        position: 'fixed',
        fontSize: 12,
        left: clientX,
        top: clientY,
      }}
    >
    💢
    </div>
  )
}


export default MyPointer
