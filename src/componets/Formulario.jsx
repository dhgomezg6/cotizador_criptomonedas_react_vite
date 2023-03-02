import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFFFFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }

`
const Formulario = () => {

  const [ SelectMonedas ] = useSelectMonedas('Select Monedas');
  const [ SelectCriptomonedasMonedas ] = useSelectMonedas('Select Criptomonedas');

  return (
    <form>
        <SelectMonedas />
        <SelectCriptomonedasMonedas />

        <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario