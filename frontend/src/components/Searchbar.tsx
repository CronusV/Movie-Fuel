// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import{Dropdown, DropdownButton, Form, InputGroup} from 'react-bootstrap'
function ButtonDropdownsExample() {
    let value = '';
    let sort = 'popularity.desc';
    function onSubmit(){
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
          variant="primary"
          title="Sort by"
          id="input-group-dropdown-1"
          onChange={dropDownClick}
        >
          <Dropdown.Item onClick={dropDownClick} href="#" id='1'>revenue descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='2'>revenue ascending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='3'>popularity descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='4'>popularity ascending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='5'>rating descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='6'>rating ascending</Dropdown.Item>
        </DropdownButton>
        
            <input type='text' className='form-control' placeholder="Search movies" onChange={onChange}></input>
            <input type="submit" id='submitfire' className='btn btn-primary' value='Go' onClick={onSubmit}></input>
        </form>
      </InputGroup>
    </>
  );
}


export default ButtonDropdownsExample;