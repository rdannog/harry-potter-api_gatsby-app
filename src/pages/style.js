import { createGlobalStyle } from 'styled-components'
import Background from '../images/background.jpeg'

export const GlobalStyle= createGlobalStyle`
body{
  background-image: url(${Background});
  background-size:contain;
  margin:0;
  padding:0;
  box-sizing:border-box;
  cursor:default;
}
`