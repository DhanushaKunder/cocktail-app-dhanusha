import React from "react";
import { Link } from 'react-router-dom'

const Error = () =>{
    return(
        <section classname="section error-page">
            <div className="error-container">
                <h1>OOPS!! you have reached a DeadEnd❌</h1>
                <Link to ="/" className="btn btn-primary">
                    Back Home
                </Link>
            </div>
        </section>
    );
}
export default Error;