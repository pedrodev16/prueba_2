import { signIn, signOut } from 'next-auth/react';
import { GuardarIdGoogle } from './user';
export const handleSignIn = () => {
    signIn('google');
    GuardarIdGoogle();
}
export const handleSignOut = () => signOut();


