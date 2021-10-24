import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(( {done}: ContainerProps ) => (

  `display: flex;
  background-color: #1B1F1E;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;

  input{
    width: 20px;
    height: 20px;
    margin-right: 1vw;
  }

  label{
    text-decoration: ${ done ? 'line-through' : 'initial'};
  }
`))
;