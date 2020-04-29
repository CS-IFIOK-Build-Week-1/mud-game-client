import styled from 'styled-components';

export const FormCon = styled.div`
  display:flex;
  justify-content: center;
  font-family: 'Rokkitt', serif;
  letter-spacing: 0.12em;
  font-size: 1.2em;
  
  .regForm {
    display: flex;
    flex-direction: column;

    .error_message {
      color: #FF224A;
      margin-bottom: 0.3em;
      margin-top: 1em;
      font-size: 0.8em;
    }
    
    input {
      width: 400px;
      margin-top: 1em;
      height: 50px;
      background-color: hidden;
      background: none;
      border: 2px solid #08E152;
      padding-left: 2em;
      color: #FAFF13;

      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #FAFF13;
        font-family: 'Rokkitt', serif;
        font-weight: 500;
        font-size: 1.1em;
        letter-spacing: 0.1em;
        opacity: 0.4; /* Firefox */
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #FAFF13;
        font-family: 'Rokkitt', serif;
        font-weight: 500;
        font-size: 1.1em;
        letter-spacing: 0.1em;
        opacity: 0.4;
}

      ::-ms-input-placeholder { /* Microsoft Edge */
        color: #FAFF13;
        font-family: 'Rokkitt', serif;
        font-weight: 500;
        font-size: 1.1em;
        letter-spacing: 0.1em;
        opacity: 0.4;
      }
    }
  }
`;

export const AfterButton = styled.div`
  display: flex;
  justify-content: space-between;
  color: #FAFF13;
  font-size: 0.8em;
  
  p {
    margin: 0;
  }
  
  a {
    color: #FAFF13;
    font-style: italic;
  }
`;

