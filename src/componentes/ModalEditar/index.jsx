import styled from "styled-components";
import iconeX from "../ModalEditar/X - cancel.png";
import { useContext, useState } from "react";
import CampoTexto from "../CampoTexto";
import { FormularioContext } from "../../contexto/FormularioContext";
import ListaSuspensaModalComponent from "../ListaSuspensaModal";


const FundoModal = styled.div`
    background-color: rgba(3, 18, 47, 0.76);
    border-radius:15px;
    display: flex;
    justify-content:center;
    align-items:center;
    position: fixed;
   
`

const ModalEstilizado = styled.div`
    position:fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
   
    
  img{
       width:20px;
       height: 20px;
       cursor: pointer;
       border-radius:100%;
       position: fixed;
       top:10px;
       left:10px;
       box-shadow: inset 0.7px 0.5px 17px 5px var(--azulEscuro);
       @media (max-width: 360px){
     
        left:0px;
       }
       @media (max-width: 430px){
        transform: translateY(100px);
       }
       @media (max-width: 768px){
        top:-210px;
        left:20px;
       }
       /* @media (max-width: 1024px){
        transform: translateX(150px);
        top: -80px;
       } */
       
    }
   
    h3{
        color: var(--azulEscuro);
        text-align:center;
        margin-top: 20px;
        font-weight:900;
        @media (max-width: 360px){
            margin-top:0;
        }
        @media (max-width: 430px) {
            margin-bottom:10px;
        }
        @media (max-width: 768px) {
            margin-top: -140px;
           
        }
        /* @media (max-width: 1024px){
            margin-top: -90px;
    } */
} 
`

const FormularioEstilizado = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 560px;
    border: 2px solid var(--azulEscuro);
    border-radius:15px;
    color: var(--azulEscuro); 
   
    @media (max-width: 360px){
        height:620px;
    }
    @media (max-width: 430px){
        padding: 8px;
    }
    @media (max-width: 768px) {
    height: 75vh;
    
}

form{
position:relative;
background-color: rgba(3, 18, 47, 0.76);
display: block;
@media (max-width: 360px){
    width:80vw;
    height: 65vh;
}
/* @media (max-width: 1024px){
    width:80vw;
background-color:transparent;
margin-left:20%;
margin-bottom:50px;
} */
}

input{
    background-color: rgba(3, 18, 47, 0.76);
    border: 2px solid var(--azulEscuro);
    @media (max-width: 360px){
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction:column;
    }  
    @media (max-width: 430px){
        width:90vw;
    }
    @media (max-width: 768px){
        min-width: 60vw;
        margin-left:10px;
    }
    /* @media (max-width: 1024px){
        min-width: 40vw;
        margin-left:20px;
    } */
}

`

const BotoesEstilizadosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 25px;
    @media (max-width: 360px) {
       top:480px;
       position:fixed;
       margin-left:20px;
    }
button{
    color: var(--cinzaEscuro);
    padding-inline: 3rem;
    background-color: rgba(3, 18, 47, 0.76);
    border: 2px solid var(--azulEscuro);
    border-radius: 20px;
    padding: 10px 30px;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: var(--fonteNavBotoes);
    &:hover{
    border: 2px solid var(--azulEscuro);
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: inset 0.7px 0.5px 17px 5px var(--azulEscuro);
    color: var(--azulEscuro);
    }
    
}  

 
`

const Modal = ({onClose, videoData, aoVideoCadastrado }) => {


    const [categorias, setCategorias] = useState([
        'FRONT END',
        'BACK END',
        'MOBILE',
      ]);

      const [categoriaSelecionada, setCategoriaSelecionada] = useState(
        videoData?.categoria || ""
      );
      const [titulo, setTitulo] = useState(videoData?.titulo || "");
      const [imagem, setImagem] = useState(videoData?.imagem || "");
      const [video, setVideo] = useState(videoData?.video || "");
      const [descricao, setDescricao] = useState(videoData?.descricao || "");
      const [categoria, setCategoria] = useState(
        videoData?.categoria || ""
      );
      const [url, setUrl] = useState(videoData?.url || "");
    

  const handleCategoriaChange = (event) => {
    setCategoriaSelecionada(event.target.value);
  };

   const aoSalvar = (evento) => {
       evento.preventDefault()
       aoVideoCadastrado({
        titulo,
        imagem,
        video,
        descricao,
        categoria,
       })


     }


     const limparFormulario = () => {
        setTitulo(''),
        setImagem(''),
        setVideo(''),
        setDescricao(''),
        setCategoria('')
     }

     const { fecharModal } = useContext(FormularioContext)
    
    return (

         <FundoModal>  
           
             
             <FormularioEstilizado > 
                <ModalEstilizado> 
                <h3>EDITAR CARD</h3>
                <img 
                 src={iconeX} 
                 alt='Icone fechar' 
                 type='button'   
                 onClick={(event) => {
                     event.preventDefault(); // Impede o scroll da página
                      fecharModal();
                   }}
               />
            <form>  
                <div>
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Titulo" 
                    placeholder="Digite o título do vídeo" 
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                    />
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o link da imagem do vídeo"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                </div>
                <div>
                    <ListaSuspensaModalComponent
                     obrigatorio={true} 
                     label="Categoria" 
                     placeholder="Escolha uma categoria" 
                     valor={categoria}
                     aoAlterado={valor => setCategoria(valor)}
                    />
                </div>
                <div>
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Vídeo" 
                    placeholder="Digite o link do vídeo" 
                    valor={video}
                    aoAlterado={valor => setVideo(valor)}
                    />
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Descrição" 
                    placeholder="Sobre o que é esse vídeo?" 
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                    />
                </div>
                
            </form>
                <BotoesEstilizadosContainer >
                    <button type="submit" onClick={aoSalvar}>GUARDAR</button> 
                    <button type="button" onClick={limparFormulario}>LIMPAR</button>
                </BotoesEstilizadosContainer>
            </ModalEstilizado> 
        </FormularioEstilizado >
                
        
         </FundoModal>
    )
}


export default Modal
















// import styled from "styled-components";
// import React, { useState } from "react";





// const ModalEditar = ({ props, showModal, onClose, onSave, video }) => {
// //     console.log(props)

     
//     return(
        

//     )
// }

// export default ModalEditar;

