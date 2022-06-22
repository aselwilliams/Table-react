import React from 'react';
import {FiEdit, FiTrash2} from 'react-icons/fi'

const ReadOnlyRow = ({item,handleDelete}) => {
  return (
    <tr >
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
  )
}

export default ReadOnlyRow