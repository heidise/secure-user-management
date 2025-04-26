import { useState } from 'react';

function Login( {onRegistrationClick} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO: check inputs first.
    }

    return (
        <div className="form">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <label className="username-label">Username </label>
                <input className="username-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="password-label">Password </label>
                <input className="password-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" id="login-button">Login</button>
            </form>

            <p onClick={onRegistrationClick} className="log-reg-button">
                No account? Register here
            </p>
        </div>
    );
}

export default Login;