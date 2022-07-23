import React, { Children, Fragment, isValidElement, ReactNode, useContext } from 'react';
import { routerContext } from './index';

interface Props {
  children: ReactNode;
}

export const Routes: React.FC<Props> = ({ children }) => {
  const { path } = useContext(routerContext);

  let element = null;

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      return;
    }

    if (child.type === Fragment) {
      return;
    }

    if (!child.props.path || !child.props.element) {
      return;
    }

    if (child.props.path !== path) {
      return;
    }

    element = child.props.element;
  });

  return element;
};
