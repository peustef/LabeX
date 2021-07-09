import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { goToLogin } from '../routes/coordinator';

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            goToLogin(history)
        }
    }, [history])
}