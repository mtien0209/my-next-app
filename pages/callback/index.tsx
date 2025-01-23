// pages/callback.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CallbackPage: React.FC = () => {
  const router = useRouter();
  const [queryString, setQueryString] = useState<string>(''); // Lưu giá trị queryString trong state

  useEffect(() => {
    const query = router.query;

    // Chuyển đổi query thành chuỗi query string
    const queryStringValue = new URLSearchParams(query as Record<string, string>).toString();
    setQueryString(queryStringValue); // Cập nhật giá trị queryString vào state

    const redirectPort = process.env.NEXT_PUBLIC_REDIRECT_PORT || '4040';

    // Redirect về localhost kèm query string
    if (queryStringValue) {
      router.push(`https://localhost:${redirectPort}/?${queryStringValue}`);
    }
  }, [router.query]);

  return (
    <div>
      <h1>Callback Page</h1>
      <p>Redirecting...</p>
      <p>Query String: {queryString || 'No query string found'}</p>
    </div>
  );
};

export default CallbackPage;
