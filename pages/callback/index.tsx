// pages/callback.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CallbackPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const { grant_token } = router.query;
      const redirectPort = process.env.NEXT_PUBLIC_REDIRECT_PORT || '4040'
    // Nếu grant_token tồn tại, redirect về localhost kèm grant_token
    if (grant_token) {
      router.push(`https://localhost:${redirectPort}?grant_token=${grant_token}`);
    }
  }, [router.query]);

  return (
    <div>
      <h1>Callback Page</h1>
      <p>Redirecting...</p>
    </div>
  );
};

export default CallbackPage;
