import React from 'react'
import './App.css'
import { TwiterFollowCard } from './TwitterFollowCard'
import './index.css'

const users = [
    {
        userName: 'alvarofatty',
        name: 'Álvaro Barrigón',
        initianIsFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        initianIsFollowing: false
    },
    {
        userName: 'antonio',
        name: 'Antinio',
        initianIsFollowing: true
    },
]

export function App (){
    return(
        <section className='App'> 
            {
                users.map(({userName, name, initianIsFollowing}) =>{
                    return (
                        <TwiterFollowCard
                        key={userName}
                        userName={userName}
                        initianIsFollowing={initianIsFollowing}
                        
                    >
                        {name}
                    </TwiterFollowCard>
                    )
                })
            }
        </section> 
    )
}