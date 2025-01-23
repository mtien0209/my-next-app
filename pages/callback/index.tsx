


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { grant_token } = context.query;

//   if (!grant_token) {
//     return {
//       redirect: {
//         destination: '/error', // Redirect đến trang lỗi nếu không có grant_token
//         permanent: false,
//       },
//     };
//   }

//   // Gọi API để đổi grant_token thành access token (nếu cần)
//   // const accessToken = await fetchAccessToken(grant_token);

//   return {
//     props: {
//       grant_token,
//     },
//   };
// };

// const Callback = ({ grant_token }) => {
//   return (
//     <div>
//       <h1>Login Successful</h1>
//       <p>Grant Token: {grant_token}</p>
//       {/* Bạn có thể xử lý thêm hoặc hiển thị thông báo thành công */}
//     </div>
//   );
// };
import { log } from 'console';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const grant_token = urlParams.get('grant_token');
    
    console.log(grant_token)
    
    if (grant_token) {
      // Xử lý grant_token: có thể gọi API hoặc lưu vào state
      console.log('Grant Token:', grant_token);

      // Chuyển hướng người dùng sau khi xử lý
      router.push('/');
    } 
    
    // else {
    //   // Xử lý khi không có grant_token
    //   router.push('/error');
    // }
  }, [router]);

  return <div>Processing login...</div>;
};

export default Callback;


// const Callback = () => {
//   // const router = useRouter();

//   // useEffect(() => {
//   //   // Xử lý grant_token hoặc các tham số khác nếu cần
//   //   const { grant_token } = router.query;

//   //   if (grant_token) {
//   //     // Fetch access token hoặc thực hiện các hành động khác
//   //     console.log('Grant Token:', grant_token);
//   //   }

//   //   // Chuyển hướng người dùng đến trang chính hoặc trang khác
//   //   router.push('/');
//   // }, [router]);

//   return <div>Processing login...</div>;
// };

