import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Curtir, P, ContainerPai, Link, Bottom, ButtonLink, BottomLiked, ButtonTop } from "./CardsFeedStyle";

export function CardsFeed(){
    const cardsPure = localStorage.getItem('repositories')
    const cards = JSON.parse(cardsPure)
    const [escolhido, setEscolhido] = useState()
    var [curtidos, setCurtidos] = useState([])
    var [i, setI] = useState()
    const onEnterId = (id) =>{
        const idAtual = id
        const isDataBase = dataBase => dataBase.id === id;
        const row = cards.filter(isDataBase);
        localStorage.setItem('Escolhido', JSON.stringify(row[0].id))
        setEscolhido(row[0].id)
        let index = curtidos.findIndex(array => array.id === idAtual);
        setI(index)
    }

    useEffect(()=>{
        const curt = localStorage.getItem('Curtidos')
        setCurtidos(JSON.parse(curt))
    },[])

    function changePosition(arr, from, to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        return arr;
    };

    const Curtir = (id) =>{
        // const newId = JSON.parse(id)
        const local = localStorage.getItem('Curtidos')
        const localStore = JSON.parse(local)
        localStore.push(id);
        let last = 0
        const idAtual = id.id
        console.log(idAtual)
        // changePosition(localStore, last, idAtual)
        if(curtidos.length === 0){
             last = 0
        }else if (curtidos.length > 0){
             last = (curtidos.length - 1)
        }else if (curtidos == null){

        }

        function isBiggerThan10(element, index, array) {
            return element.id == idAtual;
          }

        const response = curtidos.some(isBiggerThan10)
// curtidos.push(id)
        if(response == true){
            curtidos[last].curtido = true
            if (curtidos[last].curtido == undefined){
                curtidos[last].curtido = true
            } else if(curtidos[last].curtido == true){
                curtidos[last].curtido = false
                curtidos.splice(i, 1)
            } else if(curtidos[last].curtido == false){
                curtidos[last].curtido = true
            }
        }else if (response == false){
            curtidos.push(id)
        }


        console.log(i)
        
        console.log(curtidos)
        localStorage.setItem('Curtidos',  JSON.stringify(curtidos))
    }
    const map = cards.map((info)=>{
        return <Container key={info.id} onMouseEnter={()=>onEnterId(info.id)}>
                    <img src={info.owner.avatar_url}/>
                    <h2>{info.name}</h2>
                    <P>{info.description}</P>
                    <Bottom>
                    <svg onClick={()=>Curtir(info)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    <ButtonLink><Link href={info.html_url} target="_blank">Repositório</Link></ButtonLink>
                    </Bottom>
                </Container>
    })

    const navigate = useNavigate()

    const onClickButtomTop = () =>{
        navigate('/liked')
    }

    return(
        <ContainerPai>
            <ButtonTop onClick={()=>onClickButtomTop()}>Curtidos</ButtonTop>
            {map}
        </ContainerPai>
    )
}

export function CardsLiked(){
    const cardsPure = localStorage.getItem('Curtidos')
    const cards = JSON.parse(cardsPure)
    const mapLiked = cards.map((info)=>{
        return <Container key={info.id}>
                    <img src={info.owner.avatar_url}/>
                    <h2>{info.name}</h2>
                    <P>{info.description}</P>
                    <BottomLiked>
                    <ButtonLink><Link href={info.html_url} target="_blank">Repositório</Link></ButtonLink>
                    </BottomLiked>
                </Container>
    })

    const navigate = useNavigate()

    const onClickButtomTop = () =>{
        navigate(-1)
    }

    return(
            <ContainerPai>
                <ButtonTop onClick={()=>onClickButtomTop()}>Voltar</ButtonTop>
                {mapLiked}
            </ContainerPai>
    )
}

// Nome do repositório name
// Descrição do repositório description
// link do repositório html_url
// Botão de Curtir (clicando para curtir e clicando novamente para “descurtir”)
