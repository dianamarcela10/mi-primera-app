import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import "../style.modules/navBar.modules.css";

const Navbar = () => {
return (
<div className="navbar">
    <h1>TIENDA DE ZAPATOS</h1>
     
    <ul>
        <li>inicio</li>
        <li>categorias</li>
        <li><FiShoppingCart /></li>
    </ul>
</div> 
)
 
}
export default Navbar