import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDownComp(props) {

  const [selectedLanguage, setSelectedLanguage]  = useState("all");

    function onDropDownClick(e){
        const languageSelected = e;
        setSelectedLanguage(languageSelected);
        props.onLanguageChange(languageSelected);
    }

  return (
    <Dropdown onSelect={onDropDownClick} className='m-2'>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        {selectedLanguage.toUpperCase()}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="hindi" active={selectedLanguage==="hindi"}> Hindi</Dropdown.Item>
        <Dropdown.Item eventKey="english" active={selectedLanguage==="english"}> English </Dropdown.Item>
        <Dropdown.Item eventKey="tamil" active={selectedLanguage==="tamil"}> Tamil </Dropdown.Item>
        <Dropdown.Item eventKey="all" active={selectedLanguage==="all"}> All   </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownComp;