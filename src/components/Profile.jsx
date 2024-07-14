import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);
    if (!user) return (<div className="text-lg text-gray-700">Please Login</div>);

    return <div className="text-2xl text-gray-700">Welcome {user.username}</div>;
}

export default Profile;
