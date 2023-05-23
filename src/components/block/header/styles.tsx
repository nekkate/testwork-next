import styled from "styled-components";

 export const StyledSection= styled.header`
 position: relative;
 padding: 91px 0 9px 0;
 max-height: 150px;
 margin-bottom: 33px;

 &:after{
    position: absolute;
    content: "";
    background-color: ${(props) => props.theme.colorOrange};
    width: 100%;
    height: 2px;
    bottom: 0
}
`