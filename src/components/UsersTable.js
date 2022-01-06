import { Fragment, useEffect, useState } from 'react';
import Header from './Header';
import Pagination from './Pagination';
import Search from './Search';
import TableHeader from './TableHeader';

const UsersTable = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getData = () => {
      fetch('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
        .then(res => res.json())
        .then(data => {
          setUsers(data)
        })
    }

    getData()
  }, [])

 
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
          <TableHeader/>
        <table className="table table-striped">
           
            <tbody>
               
            </tbody>
        </table>
    </div>
</div>

        
    </Fragment>
};

export default UsersTable;
