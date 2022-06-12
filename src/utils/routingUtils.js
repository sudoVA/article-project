import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';

export function AuthenticatedRoute(props) {
    const isAuth = useSelector((state) => state.user.isAuth);
    return isAuth ? (<><Navbar />{props.component}</>) : (<Navigate to='/' />);
};

export function PublicRoute(props) {
    const isAuth = useSelector((state) => state.user.isAuth);
    console.log(isAuth);
    return !isAuth ? (<>{props.component}</>) : (<Navigate to='/' />);
};
