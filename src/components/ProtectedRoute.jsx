import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog,  faHouse, faRightToBracket, faPaste, faBackward } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))

        if(!user)
        {
          navigate("/login")
        }
    },[])
  return (
    <>
    <div class="bg-blue-300">
    <header className="container mx-auto flex justify-between items-center text-white">
      <Link to="/">
      <h1 className="text-4xl font-semibold text-gray-700">予定表</h1>
      </Link>
    </header>
    <ul className="md:flex justify-end">
    <li className="border-b md:border-none">
      <Link to="/" class="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faBlog} />test
      </Link>
    </li>
    <li className="border-b md:border-none">
      <Link to="/" className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faHouse} />test
      </Link>
    </li>
    <li className="border-b md:border-none">
      <Link to="/"className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faPaste} />test
      </Link>
    </li>
    {/* <div className='absolute top-0 right-0 p-4'>
    <li className="border-b md:border-none">
      <Link to="/"className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faRightToBracket} />{user && <p>{user.name}</p>}
      </Link>
    </li> 
    </div> */}

    { user ?  
    <li className="border-b md:border-none">
      <div className="block px-8 py-2 my-4 hover:bg-gray-100 rounded" onClick={() => { if(user.role === "admin"){ navigate("/admin")} else{ navigate("/profile") } }}
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faBackward } />{user.name}
      </div>
    </li>
     :  <li className="border-b md:border-none">
      <Link to="/login"className="block px-8 py-2 my-4 hover:bg-gray-100 rounded"
        ><FontAwesomeIcon className='h-5 w-5 mr-2' icon={faRightToBracket} />Login
      </Link>
    </li> }


    { user && 
      <li className="border-b md:border-none">
      <div  className="block px-8 py-2 my-4 hover:bg-gray-100 rounded" onClick={() => {
        localStorage.removeItem("user")
        navigate("/login")
      }}
        ><FontAwesomeIcon className='h-5 w-5 mr-2'  icon={faRightToBracket} />Lgout
      </div>
    </li>  }
  </ul>
  </div>
  <div>{ children }</div>
  </>
  )
}

export default ProtectedRoute