import { MouseEvent, ReactNode, useCallback, useContext } from 'react';
import { routerContext } from './index';

interface Props {
  children: ReactNode;
  from?: string;
  to: string;
}

export const Link: React.FC<Props> = ({ children, to }) => {
  const { changePath } = useContext(routerContext);

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      changePath(to);
    },
    [to],
  );

  return (
    <a href={to} onClick={handleOnClick}>
      {children}
    </a>
  );
};
