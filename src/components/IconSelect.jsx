/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Select } from 'react-select-virtualized';

function IconSelect(props) {
  const { icons, onChange } = props; 
  return (
      <Select
        options={icons}
        onChange={onChange}
      />
  );
}

export default IconSelect;
