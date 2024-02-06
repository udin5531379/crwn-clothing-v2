import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import '../navigation/navigation.component.style.scss'
import { ReactComponent as UdinLogo } from '../../assets/logo.svg'

const Navigation = () => {
    return (
        <Fragment>
            <div className="nav-bar">
                <Link className="logo-container" to={'/'}>
                    <UdinLogo className="logo"/>
                </Link>
                
                <div className="nav-bar-links">
                    <Link className="nav-bar-link" to={'/shop'}>
                        <p2>SHOP</p2>
                    </Link>

                    <Link className="nav-bar-link" to={'/'}>
                        <p2>SHOES</p2>
                    </Link>

                    <Link className="nav-bar-link" to={'/sign-in'}>
                        <p2>SIGN IN</p2>
                    </Link>
                </div>
            </div>
            <Outlet/>  
        </Fragment>
    )
}

export default Navigation

