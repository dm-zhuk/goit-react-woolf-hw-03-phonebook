import React from 'react';
import { Label, Input } from 'components/ContactForm/index';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Label>
        Find contacts by name:
        <Input type="text" value={filter} onChange={onChange} />
      </Label>
    </>
  );
};

export default Filter;
