import React from "react";

function RepositoriesLiked(){
    const navigate = useNavigate()
    const onClickButtomTop = () =>{
        navigate('/')
    }
    return(
        <div>
            <h2>Lista de curtidos vazia</h2>
            <button onClick={onClickButtomTop}>Voltar</button>
        </div>
    )
}

export default RepositoriesLiked;