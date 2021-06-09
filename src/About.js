import React, { useState } from 'react';
import Demolist from './Demolist'

const About = () => {
    const [state, setState] = useState('Welcome To Wed World')
    const [subs, setSubs] = useState('Subscribe')
    const nameChange=()=>{
        setState('Welcome You JusT Subscribed')
        setSubs('Subscribed')
    }

    const arrayList = [
        {
            id: 0,
            name: 'Rafay',
            work: 'Web developer'
        },
        {
            id: 1,
            name: 'Zainab',
            work: 'Front End Developer'
        },
        {
            id: 2,
            name: 'Hamza',
            work: 'SQL Expert'
        }
    ]
    const arrayCard = arrayList.map((arrayC, i) => {
        return <Demolist key={i} name={arrayList[i].name} work={arrayList[i].work} />
    })

    return (

        <div>
            <h1 className="tc">
                {state}
            </h1>
            <div className="div1 flex justify-center">
                {arrayCard}
            </div>
            <button id='btn' className='ma3 pa2 btn-sm'
                onClick={() => {nameChange()}}>{subs}
            </button>
        </div>
    )
}

export default About;
