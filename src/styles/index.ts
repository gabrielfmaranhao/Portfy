import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --white:          #FFFFFF;
    --whitesmoke:     #F1F3F5;
    --whitesmoke-2:   #E1E3E5;
    --black:          #1A1A1A;
    --faded-black:    #00000097;
    --green-black:    #005C57;
    --dark-blue:      #114B5F;
    --ligth-green:    #47DAC5;
    --medium-green:   #0CBABA;
    --faded-green:    #47DAC53A;
    --ligth-blue:     #19CAE5;
    --medium-blue:    #09AAC5;
    --dark-blue:      #007A95;
    --disabled-blue:  #A9CAE5;
    --success:        #6FD551;
    --color-negative: #DD4C50;
    --negative-hover: #BD2C30;
    --ligth-grey:     #D9DADE;
    --medium-grey:    #91959A;
    --dark-grey:      #5A5A5A;

    --gradient: linear-gradient(115.77deg, #47DAC5 10.59%, #19CAE5 87.7%);
    --boxshadow: 0px 0px 10px 4px #0000001A;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, label {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Poppins';

    &::-webkit-scrollbar {
    width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--ligth-grey);
      border-radius: 20px;
    }
  }

  input , button, textarea, select {
    font-family: inherit ;
  }

  ol, ul {
    list-style: none;
  }

  html,body, #root{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 ,h5 ,h6 , p  {
    margin:0px
  }

  button {
    cursor: pointer;
    outline: none;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 100px var(--white) inset;
    transition: background-color infinite ease-in-out 0s;
    -webkit-text-fill-color: var(--black);
  }
`;
