import React from 'react'
import { Link } from 'react-router-dom'

export default ()=>{
        return (
            <div className="boxed-view">
                    <div className="boxed-view__box">
                            <h1>Page Not Found</h1>
                            <p>Hmmm, we were unable to find that page</p>
                            <Link to="/" className="button button--link">Head to home</Link>
                    </div>
            </div>
        )
}
