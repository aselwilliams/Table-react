import React from 'react';
import {FiEdit, FiTrash2} from 'react-icons/fi';
import {GrSave} from 'react-icons/gr'

const EditableRow = ({editFormData, handleEditFormChange,item, handleCancel}) => {
  return (
  <tr>
      <td>
          <input type='text' value={editFormData.id} required='required' placeholder='Enter an ID...' name='id' onChange={handleEditFormChange}/>
      </td>
      <td>
      <input type='text' value={editFormData.firstName} required='required' placeholder='Enter a first name...' name='firstName' onChange={handleEditFormChange}/>
      </td>
      <td>
      <input type='text' value={editFormData.lastName} required='required' placeholder='Enter a last name...' name='lasName' onChange={handleEditFormChange}/>
      </td>
      <td>
      <input type='text' value={editFormData.email} required='required' placeholder='Enter an email...' name='email' onChange={handleEditFormChange}/>
      </td>
      <td>
      <input type='text' value={editFormData.gender} required='required' placeholder='Enter a gender...' name='gender' onChange={handleEditFormChange}/>
      </td>
      <td className='d-flex justify-content-evenly'>
                <button type='submit'>Save</button>
                <button onClick={handleCancel}>Cancel</button>
                </td>
  </tr>
  )
}

export default EditableRow