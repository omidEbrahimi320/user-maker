import './UsersTable.css';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const UsersTable = props => {
    const products = [
        {code: 1, name: 'omid', registryDate: 'jjj', },
        {code: 1, name: 'omid', registryDate: 'jjj', },
        {code: 1, name: 'omid', registryDate: 'jjj', },
        {code: 1, name: 'omid', registryDate: 'jjj', },
        {code: 1, name: 'omid', registryDate: 'jjj', },
    ]

    return (
      <DataTable className='user-table' value={props.users}>
        <Column field="code" header="#"></Column>
        <Column field="name" header="نام"></Column>
        <Column field="age" header="سن"></Column>
        <Column field="registeryDate" header="تاریخ عضویت"></Column>
        {/* <Column field="quantity" header="Quantity"></Column> */}
      </DataTable>
    );
}

export default UsersTable