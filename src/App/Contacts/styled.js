import styled from 'styled-components';


export const ContactsWrapper = styled.div`
  background-color: #fff48c;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  padding: 5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  input {
    margin-bottom: 1rem;
  }
  textarea {
    margin-bottom: 1rem;
  }
`;

export const DescriptionWrapper = styled.div`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: normal;
  text-align: center;
  width: 50%;
`;

export const Description = styled.p`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid;
`;  