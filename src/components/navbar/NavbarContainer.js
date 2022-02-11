import {connect} from "react-redux";
import Navbar from "./Navbar";


const mapStateToProps = (state) => {
    return{
        navBar: state.navBar
    }
}
const mapDispatchToProps = (dispatch) => {}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default NavbarContainer