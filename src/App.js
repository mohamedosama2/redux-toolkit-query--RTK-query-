import "./App.css";
import { useAddPostMutation, useGetUsersQuery } from "./services/users";

function App() {
  const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery();
  const [addPost, { isLoading: isLoadingData }] = useAddPostMutation();

  return (
    <div className="App">
      <button
        onClick={() =>
          addPost({ user: "mohamed", name: "Hosaam", title: "post" })
        }
      >
        Add{" "}
      </button>
      <h1>Welcome to React Redux Toolkit RTK Query</h1>
      {isLoading && "Loading..."}
      {isLoadingData && "Loading..."}
      {isError && error.message}
      {isSuccess &&
        data &&
        data.map((user, i) => <h1 key={user.id}>{user.name}</h1>)}
    </div>
  );
}

export default App;
