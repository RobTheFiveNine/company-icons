/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AutoComplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const LOGOS_BASE_URL = 'http://localhost:8080/logos';

function App() {
  const [icons, setIcons] = useState([]);
  const [iconPath, setIconPath] = useState(null);

  useEffect(() => {
    axios
      .get(`${LOGOS_BASE_URL}/icons.json`)
      .then((res) => setIcons(res.data));
  }, []);

  const handleOnChange = useCallback(
    (ev, value) => {
      setIconPath(
        `${LOGOS_BASE_URL}/${value.exchange}-${value.ticker}${value.ext}`,
      );
    },
    [],
  );

  return (
    <div>
      <AutoComplete
        id="combo-box-demo"
        options={icons}
        getOptionLabel={(i) => `${i.name} (${i.exchange}:${i.ticker})`}
        onChange={handleOnChange}
        renderInput={(params) => <TextField {...params} label="Icons" variant="outlined" />}
      />

      {
        iconPath ? <img className="selected-icon" src={iconPath} alt="Selected Icon" /> : null
      }
    </div>
  );
}

export default App;
