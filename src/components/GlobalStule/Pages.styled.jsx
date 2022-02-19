const { default: styled } = require("styled-components");

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 30px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const Item = styled.li`
  width: 100%;
  height: 520px;
  border-radius: 15px;
  box-shadow: -1px -2px 19px -3px rgba(162, 86, 225, 0.53);
`

export const Img = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
     transform: scale(1.02);
     cursor: pointer;
  }
`
export const Title = styled.p`
font-size: 18px;
font-weight: 700;
color: black;
list-style: none;
text-align: center;
margin-top: 20px;
`

export const Form = styled.form`
margin-top: 30px;
`
export const Input = styled.input`
  display: inline-block;
  width: 400px;
  height: 50px;
  border:  7px inset #7A24A4;
  border-radius: 5px;
`
export const BtnForm = styled.button`
  height: 50px;
  width: 70px;
  margin-left: 5px;
  border:  7px inset #7A24A4;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
  color: black;
  font-weight: 500;
  font-size: 14px;
  transition-property: color, background-color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover{
    background: #dbbae7;
    color: white;
  }
`

export const BtnControls = styled.button`
  margin: 10px;
  height: 50px;
  width: 100px;
  margin-left: 5px;
  border:  7px double #8E52A4;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
  color: black;
  font-weight: 500;
  font-size: 14px;
  box-shadow: -1px -2px 19px -3px rgba(162, 86, 225, 0.53);
  :hover{
    background: #dbbae7;
    color: white;
  }
`

