import { Link } from '../react-router/Link';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/user">go to UserPage</Link>
    </div>
  );
};
