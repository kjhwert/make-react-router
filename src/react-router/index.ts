import { createContext } from 'react';

export * from './route';
export * from './router';
export * from './routes';
export * from './useNavigate';

export interface RouterContext {
  path: string;
  changePath(path: string): void;
}

export const routerContext = createContext<RouterContext>({
  path: '',
  changePath: () => {},
});

routerContext.displayName = 'RouterContext';
