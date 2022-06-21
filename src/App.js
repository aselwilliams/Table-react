import {Users} from './data'
import './App.css';
import { useState } from 'react';
import Paginate from './components/Paginate';
import {FiEdit, FiTrash2} from 'react-icons/fi'

function App() {
  const [users, setUsers]=useState(Users)
  const [query, setQuery] =useState('')
  const [itemsPerPage,setItemsPerPage]=useState(5)
  const [currentPage,setCurrentPage]=useState(1)
  // const [currentUsers,setCurrentUsers]=useState([])
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
    const copy=handleSearch(currentUsers).map((user)=>({...user}))
    setUsers(copy.filter((el)=>el.id!==id))
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
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
        <option value='25'>25</option>
        </select>
      <Paginate itemsPerPage={itemsPerPage} currentPage={currentPage} changePage={changePage} users={handleSearch(users)}/> 
      </div>
     
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
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td className='d-fex justify-content-evenly'>
                <FiEdit />
                <FiTrash2 onClick={()=>handleDelete(item.id)}/>
                </td>
            </tr>
          ))}
        </tbody>

      </table>
    
    </div>
  );
}

export default App;
