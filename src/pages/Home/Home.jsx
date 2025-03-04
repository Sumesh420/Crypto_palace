import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div className="home">
     <div className="hero">
        <h1>Largest <br />Crypto Marketplace</h1>
        <p>Welcome to world's largest cryptocurrency marketplace. Sign up to explore more about crypto's</p>
        <form>
            <input type="text" placeholder="Search crypto.." />
            <button type='submit'>Search</button>
        </form>
     </div>
    </div>
  )
}

export default Home
