import { useState } from 'react';
import styled from 'styled-components';

const ListaSuspensaModal = styled.select`
    

display: flex;
    flex-direction:column;
    background-color:  rgba(3, 18, 47, 0.76);
    color:var(--azulEscuro);
    padding: 15px 10px;
    margin-bottom: 1rem;
    border:2px solid var(--azulEscuro);
    border-radius: 10px;
    font-size: 0.8rem; 
    box-sizing:border-box;
    min-width: 35vw;
    &:hover{
    box-shadow: -10px 10px 60px var(--azulClaro);
    }

    `

const ListaSuspensaModalComponent = ({ label, ...props }) => {
 
    const [categorias, setCategorias] = useState([
        'FRONT END',
        'BACK END',
        'MOBILE',
      ]);
 
 
    return (
        <div>
       <ListaSuspensaModal>

      <label htmlFor="categoria">{props.label}</label>

      <select id="categoria" {...props} />
      <option value="">Selecione uma categoria:</option>
                            {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                            ))}
       </ListaSuspensaModal>
    </div>
  );
};

export default ListaSuspensaModalComponent;