import {Users} from './data'
import './App.css';
import { useState } from 'react';
import Paginate from './components/Paginate';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {
  const [users, setUsers]=useState(Users)
  const [query, setQuery] =useState('')
  const [itemsPerPage,setItemsPerPage]=useState(5)
  const [currentPage,setCurrentPage]=useState(1)
  const [editId,setEditId]=useState(null)
  // const [currentContacts,setCurrentContacts]=useState([])
  const [addFormData,setAddFormData]=useState({
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    gender:'' 
  })
  const [editFormData, setEditFormData]=useState({
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    gender:'' 
  })
  const handleAddFormChange=(e)=>{
    e.preventDefault();
    const fieldName=e.target.getAttribute('name');
    const fieldValue=e.target.value;

    const newFormData={...addFormData};
    newFormData[fieldName]=fieldValue;
    setAddFormData(newFormData)
  }

  const handleEditFormChange=(e)=>{
    e.preventDefault();

    const fieldName=e.target.getAttribute('name');
    const fieldValue=e.target.value;

    const newFormData={...editFormData}
    newFormData[fieldName]=fieldValue;
    setEditFormData(newFormData)
  }

  const handleAddFormSubmit=(e)=>{
    e.preventDefault();

    const newUser= {
      id:nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      email: addFormData.email,
      gender:addFormData.gender
    }
    const newUsers=[...users, newUser];
    setUsers(newUsers)
  }
 
const handleEditFormSubmit=(e)=>{
  e.preventDefault();

  const editedUser={
    id:editId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      email: editFormData.email,
      gender:editFormData.gender
  }
  const newUsers=[...users]
  const index=users.findIndex((user)=>user.id===editId)
  newUsers[index]=editedUser;
  setUsers(newUsers);
  setEditId(null)
}

  const changePage=(num)=>{
      setCurrentPage(num)
  }

  const indexOfLastItem=currentPage*itemsPerPage;
  const indexOfFirstItem=indexOfLastItem-itemsPerPage;
  const currentUsers=users.slice(indexOfFirstItem, indexOfLastItem)
  // const keys=['first_name','last_name','email']
  // const handleSearch=(users)=>{
  //   return users.filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(query)))
  // }
  const handleSearch=(users)=>{
   return users.filter((item)=>item.first_name.toLowerCase().includes(query.toLowerCase()))
  }

  const handleDelete=(id)=>{
    const copy=users.map((user)=>({...user}))
    setUsers(copy.filter((el)=>el.id!==id))
   
  }

  const handleEdit=(e, item)=>{
    e.preventDefault()
    setEditId(item.id)

    const formValues={
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      gender: item.gender
    };
    setEditFormData(formValues)
  }
  return (
    <div className="App">
    <div className='search-wrapper'>
      <input type='text' placeholder='Search ...' value={query} className='search' onChange={(e)=>setQuery(e.target.value)}/>
      <button onClick={handleSearch} >Search</button>
      </div>
      <div className='page-container'>
        <label>Items per Page: </label>
        <select onChange={(e)=>setItemsPerPage(e.target.value)}>
        <option value='5'>5</option>
        <option value='8'>8</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
        
        </select>
      <Paginate itemsPerPage={itemsPerPage} currentPage={currentPage} changePage={changePage} users={handleSearch(users)}/> 
      </div>
     <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch(currentUsers).map((item)=>(
            <>
            {editId===item.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} item={item} handleDelete={handleDelete} key={item.id} handleEdit={handleEdit}/>) :  (<ReadOnlyRow item={item} handleDelete={handleDelete} key={item.id} handleEdit={handleEdit}/>)}
            
           
            </>
          ))}
        </tbody>

      </table>
      </form>
    <h2>Add a Contact</h2>
    <form onSubmit={handleAddFormSubmit}>
    <input type='text' name='id' required='required' placeholder='Enter an id' onChange={handleAddFormChange}/>
    <input type='text' name='firstName' required='required' placeholder='Enter a first name' onChange={handleAddFormChange}/>
    <input type='text' name='lastName' required='required' placeholder='Enter a last name' onChange={handleAddFormChange}/>
    <input type='email' name='email' required='required' placeholder='Enter an email' onChange={handleAddFormChange}/>
    <input type='text' name='gender' required='required' placeholder='Enter a gender' onChange={handleAddFormChange}/>
    <button type='submit'>Add</button>
    </form>
    </div>
  );
}

export default App;
