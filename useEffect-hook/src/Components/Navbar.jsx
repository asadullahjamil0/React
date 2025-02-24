import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    useEffect(() => {
        alert("I will run on every render!")
    })

    useEffect(() => {
        alert("I will run on just first rendering!")
    }, [])

    useEffect(() => {
        alert("I am here because color was changed!")
    }, [color])

    useEffect(() => {
        alert("This is first page. I will render on app.jsx")

        return ()=>{
            alert("Component was unmounted!")
        }
    }, [])


    return (
        <div>
            I am a Navbar {color} hehe...

        </div>
    )
}

export default Navbar