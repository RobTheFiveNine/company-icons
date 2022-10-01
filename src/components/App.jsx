/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'react-select-virtualized';
import axios from 'axios';

function App() {
  const [icons, setIcons] = useState([]);
  const [iconPath, setIconPath] = useState(null);

  useEffect(() => {
    axios
      .get('icons.mini.json')
      .then((res) => setIcons(
        res.data.map(
          (i) => ({
            value: i,
            label: `${i.name} (${i.exchange}:${i.ticker})`,
          }),
        ),
      ));
  }, []);

  const handleOnChange = useCallback(
    (item) => {
      if (!item) {
        setIconPath(null);
      } else {
        setIconPath(
          `${window.LOGOS_BASE_URL}/${item.value.exchange}-${item.value.ticker}${item.value.ext}`,
        );
      }
    },
    [],
  );

  return (
    <div>
      <Select
        options={icons}
        onChange={handleOnChange}
      />

      {
        iconPath ? <img className="selected-icon" src={iconPath} alt="Selected Icon" /> : null
      }
    </div>
  );
}

export default App;
