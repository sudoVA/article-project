import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function AuthenticatedRoute(props) {
    const isAuth = useSelector((state) => state.user.isAuth);
    return isAuth ? (props.component) : (<Navigate to='/' />);
};

export function PublicRoute(props) {
    const isAuth = useSelector((state) => state.user.isAuth);
    console.log(isAuth);
    return !isAuth ? (<>{props.component}</>) : (<Navigate to='/' />);
};
