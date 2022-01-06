import { Fragment, useEffect, useState, useMemo } from 'react';
import Header from './Header';
import Pagination from './Pagination';
import Search from './Search';
import TableHeader from './TableHeader';
import Table from 'react-bootstrap/Table'

const UsersTable = () => {

  const [users, setUsers] = useState([]);

  const headers = [

    //name : table header value,  field : api data value

    { name: "id" , field : 'id'},
    { name: "First Name" , field : 'first_name'},
    { name: "Last Name" , field : 'last_name'},
    { name: "Email" , field : 'email'},
    { name: "Age" , field : 'age'},
    { name: "Company" , field : 'company_name'},
    { name: "State" , field : 'state'},
    { name: "City" , field : 'city'},
  ]

  useEffect(()=>{
    const getData = () => {
      fetch('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
        .then(res => res.json())
        .then(data => {
          setUsers(data)
          console.log(data)
        })
    }

    getData()
  }, [])


  //using useMemo for performing ( pagination, serching , sorting  )
  //this function will be triggered only when its dependency change
  const userData = useMemo(() => {
    let computerUserData = users ;


    return computerUserData;
  },[users])

 
  return <Fragment>

  <Header title="Data Table"/>

  <div className="row w-100">
    <div className="col mb-3 col-12 text-center">
        <div className="row">
            <div className="col-md-6">
                <Pagination/>
            </div>
            <div className="col-md-6 d-flex flex-row-reverse">
                <Search/>
            </div>
        </div>
          <TableHeader headers={headers}/>
        <Table striped bordered hover>
           
            <tbody>
               {userData.map(userVal => {
                 return(
                  <tr>
                  <th scope='row'>{userVal.id}</th>
                  <td>{userVal.first_name}</td>
                  <td>{userVal.last_name}</td>
                  <td>{userVal.email}</td>
                  <td>{userVal.age}</td>
                  <td>{userVal.company_name}</td>
                  <td>{userVal.state}</td>
                  <td>{userVal.city}</td>
                </tr>
                 )
                  
               })}
            </tbody>
        </Table>
    </div>
</div>

        
    </Fragment>
};

export default UsersTable;
