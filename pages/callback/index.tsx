import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Callback = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   // Xử lý grant_token hoặc các tham số khác nếu cần
  //   const { grant_token } = router.query;

  //   if (grant_token) {
  //     // Fetch access token hoặc thực hiện các hành động khác
  //     console.log('Grant Token:', grant_token);
  //   }

  //   // Chuyển hướng người dùng đến trang chính hoặc trang khác
  //   router.push('/');
  // }, [router]);

  return <div>Processing login...</div>;
};

export default Callback;
