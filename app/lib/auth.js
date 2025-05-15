import { signIn, signOut } from 'next-auth/react';
import { GuardarIdGoogle } from './user';
export const handleSignIn = () => {
    signIn('google');
    GuardarIdGoogle();
    console.log('funciona');
}
export const handleSignOut = () => signOut();


