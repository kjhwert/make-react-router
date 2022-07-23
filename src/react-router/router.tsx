import { ReactNode, useEffect, useState } from 'react';
import { routerContext, RouterContext } from './index';

interface RouterProps {
  children: ReactNode;
}

export const Router: React.FC<RouterProps> = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = (path: string) => {
    setPath(path);
    window.history.pushState('', '', path);
  };

  useEffect(() => {
    const handleOnpopstate = (event: PopStateEvent) => {
      setPath(event.state?.path || '/');
    };

    window.addEventListener('popstate', handleOnpopstate);
    return () => {
      window.removeEventListener('popstate', handleOnpopstate);
    };
  }, []);

  const contextValue: RouterContext = {
    path,
    changePath,
  };

  return <routerContext.Provider value={contextValue}>{children}</routerContext.Provider>;
};
