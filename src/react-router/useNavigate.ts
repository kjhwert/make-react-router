import { useCallback, useContext } from 'react';
import { routerContext } from './index';

export const useNavigate = () => {
  const { path, changePath } = useContext(routerContext);

  const navigate = useCallback(
    (nextPath: string) => {
      if (path === nextPath) {
        return;
      }

      changePath(nextPath);
    },
    [path],
  );

  return navigate;
};
