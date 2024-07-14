import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Please enter username or password');
            return;
        }
        setUser({ username, password });
    }

    return (
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">Login Here Dear</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
