import React from 'react';
import { Input, Button } from 'reactstrap';

import { ContactsWrapper, InputWrapper, DescriptionWrapper, Description } from './styled';

export const Contacts = () => (
  <ContactsWrapper id="contacts">
    <InputWrapper>
      <Input type="text" placeholder="Имя" />
      <Input type="email" placeholder="Eмаил"/>
      <Input type="textarea" rows={5} placeholder="Собшение"/>
      <Button color="primary">Отослать</Button>
    </InputWrapper>
    <DescriptionWrapper>
      <Description>
        Рада буду сотрудничить с вами
      </Description>
    </DescriptionWrapper>
  </ContactsWrapper>
);