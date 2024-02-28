import { useEffect } from "react"
import axios from 'axios'

export default function Logout() {
    useEffect(() => {
        (
            async () => {
                try {
                    await axios.post(
                        `${process.env.REACT_APP_BACKEND_URL}/logout/`,
                        {
                            refres_token: localStorage.getItem('refresh_token')
                        },
                        {
                            headers: {
                                "Content-Type": "application/json",
                            }
                        }
                    )
                    localStorage.clear()
                    axios.defaults.headers.common["Authorization"] = null
                    window.location.href = '/login'
                } catch (e) {
                    console.log("Logout error", e)
                }
            }
        ) ()
    }, [])
    return (
    <div></div>
    )
}

