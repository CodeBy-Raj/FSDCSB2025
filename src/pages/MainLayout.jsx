
import { Link } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <h2 style={{display:'flex' , alignItems:'center', alignContent:'center'}}>This is main layout</h2>
      <nav>
        <Link style={{fontSize:'20px', marginLeft:'20px' }} to='/registration'>Registration</Link>
        <Link style={{fontSize:'20px', marginLeft:'20px'}} to='/dashboard'>Dashboard</Link>
        <Link style={{fontSize:'20px', marginLeft:'20px'}} to='/login'>Login</Link>
      </nav>
    </div>
  )
}

export default MainLayout
