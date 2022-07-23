import { useNavigate } from '../react-router/useNavigate';

export const Board: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <h1>board page</h1>
      <button
        onClick={() => {
          handleOnClick('/user');
        }}
      >
        go to user page
      </button>
      <button
        onClick={() => {
          handleOnClick('/');
        }}
      >
        go to home page
      </button>
    </div>
  );
};
