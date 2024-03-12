import { useState, useEffect } from "react";

const User = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("yohohohohohohoho!");
        }, 1000);

        // This return function will be called when we move to next component and it will clear interval for setInterval of "Timer" and thus the function will stop running
        //If the return function wasn't here then the function in setInterval will run continously once we have triggered it (i.e. when we visit this component) and won't stop even if we move to other components
        return ()=>{
            clearInterval(timer);
        };            

    }, []);

    return (
        <div className="user-card">
            <h2>Name: Schrodinger</h2>
            <h4>Location: Bengaluru</h4>
            <h4>Contact: @schrodinger_404</h4>
        </div>
    )
}
export default User;