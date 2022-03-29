import React from "react"
import { User } from "./types/types"
import Container from "./components/Container";
import UserContext from "./context/UserContext"

export default function App() { 

    const [users, setUsers] = React.useState<User[] | null>(null)

    async function fetchUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const array = await (await response.json())
        let userArray: User[] = []
        array.forEach((item: any) => {
            const newItem: User = {
                id: item.id,
                name: item.name,
                username: item.username,
                email: item.email,
                street: item.address.street,
                company: item.company.name,
                city: item.address.city,
                zipCode: item.address.zipcode,
                phone: item.phone,
                website: item.website,
                comment: ""
            }
            userArray.push(newItem)
        })

        setUsers(userArray)
    }

    React.useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        <UserContext.Provider value={{
            users: users
        }}>
            <Container /> 
        </UserContext.Provider>
    )
}
