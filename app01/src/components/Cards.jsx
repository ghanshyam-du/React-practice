import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" />
        <h1>{props.user} </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Cards
