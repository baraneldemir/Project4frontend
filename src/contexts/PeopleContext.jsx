import { useContext, createContext, useState } from "react"
import axios from "axios"

const PeopleContext = createContext()

export function usePeople() {
    return useContext(PeopleContext)
}

export const PeopleProvider = ({children}) => {
    const [peoples, setPeoples] = useState([])
    const [people, setPeople] = useState({})
    // const [isUpdated, setIsUpdated] = useState(false)

    
    async function getPeoples() {
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/people/`, {
        headers: {
            'Content-Type': 'application/json', 
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
          }})
        .then(response => {
            console.log(response.data)
            setPeoples(response.data)
        })
        .catch(error => console.error("Error fetching people", error))
    }
    

    // async function getRequests() {
    //     await axios.get(`${process.env.REACT_APP_BACKEND_URL}/requests/`)
    //     .then(response => {
    //         setRequests(response.data)
    //     })
    //     .catch(error => console.error("Error fetching peoples", error))
    // }

    function getPeople(peopleId) {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/people/${peopleId}/`)
        .then(response => { 
            setPeople(response.data)
        })
        .catch(error => console.error("Error fetching single people", error))
    }

    async function deletePeople(peopleId) {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/people/remove/${peopleId}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
        } catch (error) {
            console.error('Error deleting people:', error);
        }
    }

    return (
        <PeopleContext.Provider value={{
            people,
            peoples,
            getPeoples,
            getPeople,
            deletePeople,
        }}>
            {children}
        </PeopleContext.Provider>
    )
}


