import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';

const AuthCallback: React.FC = () => {
  const { handleRedirectCallback, isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const handleAuth = async () => {
      if (isLoading) return;

      const params = new URLSearchParams(location.search);
      const from = params.get('from');
      if (from) {
        localStorage.setItem('auth_from', from);
      }

      if (!isAuthenticated) {
        if (window.location.search || window.location.hash) {
          try {
            await handleRedirectCallback();
            const token = await getAccessTokenSilently();
            if (token) {
              sessionStorage.setItem('token', token);
              console.log(token);
                // navigate('/');
            } else {
              throw new Error('Access token not found in redirect result');
            }
          } catch (error) {
            console.error('Authentication failed', error);
            window.location.href = '/';
          }
        } else {
          loginWithRedirect({
            appState: { returnTo: window.location.pathname, from: 'line' }
          });
        }
      } else {
        const authFrom = localStorage.getItem('auth_from');
          const returnTo = localStorage.getItem('returnTo');
          // navigate(returnTo || '/');
          localStorage.removeItem('returnTo');
      }
    };

    handleAuth();
  }, [handleRedirectCallback, isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect, location.search]);

  return <></>;
};

export default AuthCallback;
