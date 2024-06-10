import { useState, useRef } from 'react';
import FormControl from './Form-control/Form-control';
import UsersTable from '../Users-table/UsersTable';


        
import './App.css'

function App(props) {
  const [users, setUser] = useState([]);
  const toastBottomRight = useRef(null);

  const getUsersHandler = user => {
    setUser(prevUsers => [...prevUsers, user])
  }

  // const showToastHandler = (event, ref, severity) => {
  //   const label = event.target.innerText;

  //   ref.current.show({
  //     severity: severity,
  //     summary: label,
  //     detail: label,
  //     life: 3000,
  //   });
  // }
  return (
    <div className="user-maker">
      <FormControl getUsers={getUsersHandler} />
      <UsersTable users={users} />

      
    </div>
  );
}

export default App