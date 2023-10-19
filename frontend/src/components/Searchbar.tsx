// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import SearchPage from './searchresults/Search';
import React, { useState } from 'react'
import{Dropdown, DropdownButton, Form, InputGroup} from 'react-bootstrap'
function ButtonDropdownsExample() {
  const [query, setQuery] = React.useState("barbie");
  const [currentPage, setCurrentPage] = React.useState(1);
  function nextpage(){
    setCurrentPage(currentPage + 1)
  }
  function prevpage(){
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }
    let value = '';
    let sort = 'popularity.desc';
    function onSubmit(){
        setQuery(value);
        console.log(value)
    }
    function onChange(event:any){
        console.log("change detected")
        value = event?.target.value;
    }
    function dropDownClick(event:any){
        console.log('something happened!')
        console.log(event.target.id)
    }
  return (
    <>
      <InputGroup className="w-50 p-3">
      <form className="d-flex" onSubmit={onSubmit}>
        <DropdownButton
          variant="danger"
          title="Sort by"
          id="input-group-dropdown-1"
          onChange={dropDownClick}
        >
          <Dropdown.Item onClick={dropDownClick} href="#" id='revenue.desc'>revenue descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='revenue.asc'>revenue ascending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='popularity.desc'>popularity descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='popularity.asc'>popularity ascending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='rating.desc'>rating descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='rating.asc'>rating ascending</Dropdown.Item>
        </DropdownButton>
        
            <input type='text' className='form-control' placeholder="Search movies" onChange={onChange}></input>
            <input type="btn" id='submitfire' className='btn btn-danger' value='Go' onClick={onSubmit}></input>
        </form>
      </InputGroup>
      <SearchPage text={query} language="en-US" page={currentPage}></SearchPage>
      
      <input type="btn" className='btn btn-danger' id="prevPageButton" value="Previous Page" onClick={prevpage}></input>
      <span>Page:{currentPage}</span>
      <input type="btn" className='btn btn-danger' id="nextPageButton" value="Next Page" onClick={nextpage}></input>
    </>
  );
}


export default ButtonDropdownsExample;