import React from 'react'

export default function Pokemon({ pokemon }) {
    return (
        <div className='container'>
            {
                pokemon.map((e)=>{
                    return(
                        <h4>{e}</h4>
                    )
                })
            }
        </div>
    )
}