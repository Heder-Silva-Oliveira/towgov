import styled from "styled-components";

export const NavBar = styled.div`
    margin-top: 0px;
    text-align: center;   
    margin-bottom: 0px;
    min-width: 4cm;
    max-width: 4cm;
    height: 100vw;
    background-color: #23333f;   
`;

export const Grupo = styled.div`
    text-align: left;
    

`;

export const Li = styled.li`
    list-style: none;
    width: 3.5cm;
    padding-left: 10px;
    margin-left: -1cm;
    :hover{   
    background-color: #1e2b36;
   
}
  
`;
  
export const Ul = styled.ul`
    margin-left: -25px;
    width: 10%;
    display: table-cell;
    vertical-align: bottom;
    list-style: none;
`;
 
export const Icon = styled.svg`
    width:50px ;
    height: 50px;
    padding-top: 2rem;
    font-size: 2em;
    cursor: pointer;
    color: #f1f1f1;
`; 

export const Span = styled.samp` 
    display : inline-block;
    vertical-align : 30px;
    font-size: 16px;
    color: #f1f1f1;
    font-family: 'Varela Round', sans-serif;

`;