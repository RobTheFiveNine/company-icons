/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react';
import IconSelect from './IconSelect';
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
       <h1>Company Icons</h1>
      <p>
        This page currently hosts standardised icons for <strong>{icons.length.toLocaleString("en-GB")}</strong> publicly listed companies.
        Each icon uses a 1:1 aspect ratio, making them suitable for applications that need
        to display company logos as avatars / icons.
      </p>
      <p>
        To search for an icon, use the search box below by typing in the company name or ticker symbol.
      </p>

      <IconSelect
        icons={icons}
        onChange={handleOnChange}
      />

      {
        iconPath ? <img className="selected-icon" src={iconPath} alt="Selected Icon" /> : null
      }
      
      <p className="contribution-notice">
        <small>
          Found an icon that is not available here? Consider adding it by <a href="https://github.com/RobTheFiveNine/company-icons/blob/main/CONTRIBUTING.md" target="_blank">contributing to the project</a>.
        </small>
      </p>
    </div>
  );
}

export default App;
