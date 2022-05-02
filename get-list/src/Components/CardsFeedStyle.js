import styled from 'styled-components'

export const ContainerPai = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
font-family: 'Roboto', sans-serif;

`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
border-radius: 2%;
width: 30%;
height: 70vh;
text-align: center;
img{
    width: 30%;
    border-radius: 50%;
    margin-top: 1rem;
}
svg{
    width: 10%;
    margin-bottom: 2%;
}
svg:hover{
    color: red;
}
`
export const Curtir = styled.button`
`
export const P = styled.p`
width: 80%;
font-size: 1.3em;
`

export const Link = styled.a`
text-decoration: none;
color: black;
:visited{
    color: black;
}
`

export const Bottom = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
`
export const BottomLiked = styled.div`
display: flex;
width: 80%;
justify-content: center;
`

export const ButtonLink = styled.button`
background-color: #f5f5f5;
border: 1px solid black;
margin-bottom: 2%;
border-radius: 5px;
:hover{
    background-color: #e0dcdc;
}
`

export const ButtonTop = styled.button`
font-size: 1em;
background-color: white;
border: 1px solid black;
border-radius: 5px;
padding: 0.5em;
:hover{
    background-color: #e0dcdc;
}
`