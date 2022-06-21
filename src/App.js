import {Users} from './data'
import './App.css';
import { useState } from 'react';

function App() {
  const [users, setUsers]=useState(Users)
  const [query, setQuery] =useState('')
  // const keys=['first_name','last_name','email']
  // const handleSearch=(users)=>{
  //   return users.filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(query)))
  // }
  const handleSearch=(users)=>{
   return users.filter((item)=>item.first_name.toLowerCase().includes(query.toLowerCase()))
  }

  console.log(users)
  return (
    <div className="App">
    <div className='search-wrapper'>
      <input type='text' placeholder='Search ...' value={query} className='search' onChange={(e)=>setQuery(e.target.value)}/>
      <button onClick={handleSearch} >Search</button>
      </div> 
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch(users).map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>

      </table>
    
    </div>
  );
}

export default App;
