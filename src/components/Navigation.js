import React from 'react';
import { NavLink } from 'react-router-dom';
import { getAPIBase, getLanguages, getCurrentLanguage, changeLanguage } from '../helpers/AppHelpers';

function renderLanguages() {
  const currentLanguage = getCurrentLanguage();

  return (
    <div className="languages">
      {getLanguages().map((lang) => (
        <span key={`lang-${lang}`} data-active={currentLanguage === lang} onClick={() => changeLanguage(lang)}>
          {lang}
        </span>
      ))}
    </div>
  );
}

function Navigation() {
  const [navItems, setNavItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchNav() {
      const apiBase = getAPIBase();

      let newVar = apiBase + process.env.REACT_APP_MGNL_API_NAV;
      let reactappmgnlappbase = process.env.REACT_APP_MGNL_APP_BASE;


      const url = newVar + reactappmgnlappbase;

      console.log("env: " + process.env.CONFIG_ENV);
      console.log("rest base: " + process.env.REST_BASE);
      console.log("nav: " + process.env.REACT_APP_MGNL_API_NAV);
      
      console.log(newVar);
      console.log(reactappmgnlappbase);
      console.log('NAV URL:' + url);
      const response = await fetch(url);
      const data = await response.json();
      let items = data['@nodes'].map((nodeName) => {
        return data[nodeName];
      });
      setNavItems([data, ...items]);
    }

    if (navItems.length < 1) {
      fetchNav();
    }
  }, [navItems]);

  return navItems ? (
    <nav className="Navigation">
      {navItems.map((item) => {
        return (
          <NavLink
            activeClassName="active"
            key={item['@id']}
            to={item['@path'].replace(process.env.REACT_APP_MGNL_APP_BASE, '')}
          >
            {item.navigationTitle || item.title || item['@name']}
          </NavLink>
        );
      })}
      {renderLanguages()}
    </nav>
  ) : (
    <div />
  );
}

export default Navigation;
