// pages/index.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [queryString, setQueryString] = useState<string>(''); // Lưu giá trị query string trong state

  useEffect(() => {
    const query = router.query;

    // Chuyển đổi query thành chuỗi query string
    const queryStringValue = new URLSearchParams(query as Record<string, string>).toString();
    setQueryString(queryStringValue); // Cập nhật giá trị query string vào state

    const redirectPort = process.env.NEXT_PUBLIC_REDIRECT_PORT || '3000';

    // Nếu có query string, điều hướng về localhost kèm query string
    if (queryStringValue) {
      router.push(`https://localhost:${redirectPort}/?${queryStringValue}`);
    }
  }, [router.query]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Redirecting...</p>
      <p>Query String: {queryString || 'No query string found'}</p>
    </div>
  );
};

export default HomePage;
