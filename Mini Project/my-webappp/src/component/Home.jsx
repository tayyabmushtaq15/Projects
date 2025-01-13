import React from 'react'

function Home() {
  return (
    <>
    <div className='home'>HomePage</div>
    <Library Title = "English" Author = "Abc" Description="Englisg learning" Date ="5 January 2025" />
    </>
  )
}

const Library = (props)=>{
    return(
        <div className='Card'>
            <h2>{props.Title}</h2><hr/>
            <h2>{props.Author}</h2><hr/>
            <p>{props.Description}</p><br/><hr/>
            <p>{props.Date}</p>
        </div>
    )
}

export default Home