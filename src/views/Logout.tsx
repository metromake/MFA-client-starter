import { useUserContext } from '@/hooks/contextHooks';
import { useEffect } from 'react';

const Logout = () => {
  const { handleLogout } = useUserContext();

  useEffect(() => {
    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p>log out!</p>;
};

export default Logout;
