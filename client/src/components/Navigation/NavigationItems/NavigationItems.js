import React, { useEffect, useState } from 'react'

import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
    const [user, setUser] = useState(props.isAuth)
    useEffect(() => {
        setUser(props.isAuth)
       console.log("User", user)
    }, [user])
    return (
        <ul className = {styles.NavigationItems}>
            <NavigationItem link = '/'>
                Home
            </NavigationItem>
        {
            props.isAuth ? 
                <NavigationItem link = "/survey" >
                    Survey
                </NavigationItem> 
            :null}
            
            {
            props.isAuth ? 
                <NavigationItem link = "/payment">
                    Payment
                </NavigationItem>    
            :null}
            {
            props.isAuth ?  <h1>Credits {props.isAuth.credits}</h1>:null}
        </ul>
)};

export default NavigationItems;