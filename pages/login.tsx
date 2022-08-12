import { authApi } from '@/api-client';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
    const { profile, login, logout } = useAuth({
        revalidateOnMount: false,
    });

    const router = useRouter();

    let handleLoginClick = async () => {
        try {
            await login();
            router.push('/about');
        } catch (error) {
            console.log('failed to login', error);
        }
    };
    let handleLogoutClick = async () => {
        try {
            await logout();
        } catch (error) {
            console.log('failed to logout', error);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>

            <p> Profile: {JSON.stringify(profile || {}, null, 4)} </p>

            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    );
}
