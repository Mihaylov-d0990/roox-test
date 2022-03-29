import React from "react"
import { User } from "./types/types"
import Container from "./components/Container";
import UserContext from "./context/UserContext"

export default function App() { 

    const [users, setUsers] = React.useState<User[]>([])
    const [userID, setUserID] = React.useState<string>("")
    const [formVisibility, setFormVisibility] = React.useState<boolean>(false)

    const setID = (id: string) => {
        setUserID(id)
        setFormVisibility(formVisibility => !formVisibility)
    } 

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

    const sortCity = () => {
        function sortArray(x: User, y: User){
            if (x.city < y.city) {return -1;}
            if (x.city > y.city) {return 1;}
            return 0;
        }

        const newArray = users.sort(sortArray)
        setUsers(newArray)
    }

    const sortCompany = () => {
        function sortArray(x: User, y: User){
            if (x.company < y.company) {return -1;}
            if (x.company > y.company) {return 1;}
            return 0;
        }

        const newArray = users.sort(sortArray)
        setUsers(newArray) 
    }
    
    React.useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        <UserContext.Provider value={{
            users,
            formVisibility,
            userID,
            setID,
            setFormVisibility: () => setFormVisibility(formVisibility => !formVisibility),
            sortCity,
            sortCompany 
        }}>
            <Container /> 
        </UserContext.Provider>
    )
}
