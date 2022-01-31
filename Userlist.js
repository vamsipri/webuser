import React, { useEffect, useState } from 'react';

function UserList() {
    // const [users, setUsers] = useState([
    //     { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', gender:'male',usertype:'customer' },
    //     { id: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com',  gender:'male',usertype:'customer' },
    //     { id: 3, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com',  gender:'male',usertype:'customer' },
    //     { id: 4, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com',  gender:'male',usertype:'customer' },
    //     { id: 5, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com',  gender:'male',usertype:'customer' }
    // ]);

    const [users, setUsers] = useState(()=>{
        const saved=localStorage.getItem("users")
        const initalValue=JSON.parse(saved)
        return initalValue || ""
    })
    
    // const data=localStorage.getItem("users")
    // const users=JSON.parse(data)
    // let users=[];

//  useEffect(
//         () =>{
//             console.log("use effect called")
//             const data=localStorage.getItem("users")
//             console.log(data)
            
//             setUsers(data)
//             console.log("now users")
//             console.log(users)            //  users=JSON.parse(data)
//         },[]
//     )
useEffect(() => {
    const data=localStorage.getItem('data')
    if(data) {
        users(JSON.parse(data))
    }
},[])
useEffect(() =>{
    localStorage.setItem('data',JSON.stringify(users))
})

    return (
        <div className="container">
            <h3 className="p-3 text-center">List Items</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>UserType</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {users !==undefined ? users.map(user =>
                        <tr key={user}>
                            <td>{user} {user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>
                    ):<td></td>} */}

                     {users !==undefined ? 
                        <tr key={users.fname}>
                            <td>{users.fname} {users.lname}</td>
                            <td>{users.email}</td>
                            <td>{users.fname}</td>
                            <td>{users.lname}</td>
                        </tr>
                    :<tr><td></td></tr>}

                    
                </tbody>
            </table>
        </div>
    );
}
export default UserList;