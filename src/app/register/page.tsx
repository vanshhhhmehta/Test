'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email: email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success('You are Successfully Registered!', {
                duration: 4000,
                position: 'top-right',
                style: {
                    background: '#4CAF50',
                    color: '#fff',
                },
            });

            // Redirect to Login Page after 2 seconds
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } else {
            setError(data.error || 'Registration failed, please try again');
        }
    } catch (err) {
        setError('An error occurred. Please try again.');
    } finally {
        setLoading(false);
    }
};


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <Toaster /> {/* Toast Container */}
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h1>

                {error && (
                    <div className="p-3 text-sm text-red-600 bg-red-100 border border-red-400 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-5">
                    <div className="relative">
                        <FiUser className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="relative">
                        <FiMail className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="relative">
                        <FiLock className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="relative">
                        <FiLock className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>

                    <div className="text-center mt-3">
                        <p className="text-sm text-gray-500">
                            Already have an account?{' '}
                            <a href="/login" className="text-blue-500 hover:underline">
                                Login here
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
