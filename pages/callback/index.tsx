// pages/callback.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CallbackPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const { grant_token } = router.query;
      const redirectPort = process.env.NEXT_PUBLIC_REDIRECT_PORT || '4040'
       const query = router.query;
      const queryString = new URLSearchParams(query as Record<string, string>).toString();

    // Nếu grant_token tồn tại, redirect về localhost kèm grant_token
    if (queryString) {
      router.push(`https://localhost:${redirectPort}?${queryString}`);
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
