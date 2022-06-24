import BlockList from "./BlockList";
import "../components/app.css";

const date = new Date().toDateString();

const App = () => {
  return (
    <div className="container">
      <h1 className="date">{date}</h1>
      <BlockList />
    </div>
  );
};
export default App;
