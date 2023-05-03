import Address from "./components/Address";
import FullName from "./components/FullName";
import ProfilePhoto from "./components/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col justify-center content-center align-middle m-auto mt-64">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
