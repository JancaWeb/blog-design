import React from 'react';
import { Input } from 'reactstrap';

import { ContactsWrapper, InputWrapper, DescriptionWrapper, Description } from './styled';

export const Contacts = () => (
  <ContactsWrapper id="contacts">
    <InputWrapper>
      <Input type="text" />
      <Input type="text" />
      <Input type="textarea" rows={5}/>
    </InputWrapper>
    <DescriptionWrapper>
      <Description>
        Рада буду сотрудничить с вами
      </Description>
      <Description>
        Мой эмаил
      </Description>
    </DescriptionWrapper>
  </ContactsWrapper>
);