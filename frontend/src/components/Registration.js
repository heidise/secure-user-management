import { useState } from 'react';

function Registration( {onLoginClick} ) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        // TODO: check inputs first.
    }

    return (
        <div className="form">
            <h2>Create account</h2>
            <form className="registration-form" onSubmit={handleRegistration}>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Repeat password</label>
                <input
                    type="password"
                    placeholder="Repeat your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit" id="reg-button">Register</button>
            </form>

            <p onClick={onLoginClick} className="log-reg-button">
                Already have an account? Login here
            </p>
        </div>
    );
}

export default Registration;