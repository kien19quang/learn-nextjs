import { authApi } from '@/api-client';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

export function useAuth(options?: Partial<PublicConfiguration>) {
    const {
        data: profile,
        error,
        mutate,
    } = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options,
    });

    const firstLoading = profile === undefined && error === undefined;

    async function login() {
        await authApi.login({
            username: 'huyte27',
            password: '123456',
        });

        await mutate();
    }

    async function logout() {
        await authApi.logout();
        mutate({}, false);
    }

    return {
        profile,
        error,
        login,
        logout,
        firstLoading,
    };
}
