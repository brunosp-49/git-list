import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardsFeed } from "../Components/CardsFeed";
import { ContainerFirst } from "../Components/CardsFeedStyle";

const api = {
    baseUrl:'https://api.github.com/',
    client_id: "9a857a3d7f7cefd5d408",
    client_secret: 'bcfe709f968ee0713f5f27bb5cad355c3e2d1797'
}



function FeedRepositories(){
    const [repos, setRepos] = useState()
    const [screen, setScreen] = useState()
    
    const onClickInicial = async() =>{
        await fetch('https://api.github.com/repositories')
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('repositories', JSON.stringify(data))
            setRepos(data)
            console.log(data)
            console.log(repos)
        })
        const cardsPure = localStorage.getItem('repositories')
        const cards = JSON.parse(cardsPure)
        localStorage.setItem('Curtidos' , JSON.stringify([cards[5]]))
        window.location.reload()
    }
    
    useEffect(()=>{
        
        setRepos(localStorage.getItem('repositories'))
        let teste = localStorage.getItem('repositories')
        if(teste == null){
            setScreen(1)
        }
        else{
            setScreen(2)
        }
    },[])


    return(
        <div>
            {(() => {
                switch(screen) {
                    case 1:
                        return <ContainerFirst><button onClick={onClickInicial}>carregar</button></ContainerFirst>
                    case 2: 
                        return <CardsFeed/>   
                    default:
                        return <div></div>
                }
            })()}
        </div>
            
    )
}

export default FeedRepositories;