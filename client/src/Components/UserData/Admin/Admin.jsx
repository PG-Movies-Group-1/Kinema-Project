/* import { useEffect, useState } from "react"
import { firestore } from "../../AuthContext/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../AuthContext/AuthContext";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function Admin(){

    const [users, setUsers] = useState([])
    const userData = useSelector(state => state.user)
    const [ready, setReady] = useState(false)
    const {user, loadingUser} = useAuth()

    async function allUsers(){
        let allUsers = []
        let objetos = [
            {
            active: true,
            admin: false,
            avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
            email: "pedrocmartinez568@gmail.com",
            rented: [],
            subscription: 1,
            username: "Pedro Martinez",
            watchList: []
            },
            {
                active: true,
                admin: false,
                avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
                email: "juan@gmail.com",
                rented: [],
                subscription: 1,
                username: "Juan",
                watchList: []
            },
            {
                active: true,
                admin: false,
                avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
                email: "fede@gmail.com",
                rented: [],
                subscription: 1,
                username: "Fede",
                watchList: []
            },
            {
                active: true,
                admin: false,
                avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
                email: "mati@gmail.com",
                rented: [],
                subscription: 1,
                username: "Mati",
                watchList: []
            },
            {
                active: true,
                admin: false,
                avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
                email: "pablo@gmail.com",
                rented: [],
                subscription: 1,
                username: "Pablo",
                watchList: []
            }
    ]
        const querySnapshot = await getDocs(collection(firestore, "users"));
            querySnapshot.forEach((doc) => {
                
            allUsers.push(doc.data())
            });
        return allUsers
        return objetos
    }


    useEffect(()=>{
        async function exe(){
            let allUsersData = await allUsers()
            setUsers(allUsersData)
            console.log(users)
            setReady(true)
        }
        exe()
    }, [ready])


    if(loadingUser) return null
    
    if(!user) return <Navigate  to={"/"} />
    if(!userData.admin) return (
        <div>
            <h1>You can't access here</h1>
        </div>
    )

    return(
        <div style={{"background": "blue", "height": "100vh"}} >
           <h3>Hola</h3>
            {
                users ? users.map((e, i) => <h3 key={i} >{e.email}</h3>) : null
            }
            
        </div>
    )
} 
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

/* const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]; */

let rows = [
    {
    active: true,
    id: 1,
    admin: false,
    avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
    email: "pedrocmartinez568@gmail.com",
    rented: [],
    subscription: 1,
    username: "Pedro Martinez",
    watchList: []
    },
    {
        active: true,
        id: 2,
        admin: false,
        avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
        email: "juan@gmail.com",
        rented: [],
        subscription: 1,
        username: "Juan",
        watchList: []
    },
    {
        active: true,
        id: 3,
        admin: false,
        avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
        email: "fede@gmail.com",
        rented: [],
        subscription: 1,
        username: "Fede",
        watchList: []
    },
    {
        active: true,
        id: 4,
        admin: false,
        avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
        email: "mati@gmail.com",
        rented: [],
        subscription: 1,
        username: "Mati",
        watchList: []
    },
    {
        active: true,
        id: 5,
        admin: false,
        avatar: "https://lh3.googleusercontent.com/a/ALm5wu2brZlRm8lC7cP4QiGmTUj3G2T8Vum9JVMg5agR=s96-c",
        email: "pablo@gmail.com",
        rented: [],
        subscription: 1,
        username: "Pablo",
        watchList: []
    }
]

export default function Admin() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
