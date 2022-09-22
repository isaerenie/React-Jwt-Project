import { Navigate } from "react-router-dom"
import DComponent from "../components/DComponent"
import Navbar from "../components/Navbar"
import Products from "../pages/Products"
import { control } from "../utils/control"
<DComponent />
function security(item: { component: JSX.Element }) {
  const user = !control()

  return (
    user
      ?
      <Navigate to='/' />
      :
      <> 
        
        <Navbar />
        {item.component}
      </>
  )
}
export default security

