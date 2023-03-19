import Users from "./components/Users";
import { usersStore } from "./components/Users/store";

import "./App.css";

function App() {
  return (
    <div className="App" data-testid='app'>
      <Users store={usersStore} />
    </div>
  );
}

export default App;
