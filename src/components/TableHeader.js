import { Fragment } from "react"



const TableHeader = ({headers}) =>{
    return(
            <thead>
                <tr>
                    {headers.map((head)=> (<th key={headers.field}>{headers.name}</th>))}
                </tr>
            </thead>
    )
}

export default TableHeader;