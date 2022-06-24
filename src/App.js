import Block1 from "./components/Block1";
import Block2 from "./components/Block2";
import Block3 from "./components/Block3";
import Block4 from "./components/Block4";
import Block5 from "./components/Block5";
import Block6 from "./components/Block6";
import Block7 from "./components/Block7";
import Block8 from "./components/Block8";
import Block9 from "./components/Block9";
import Block10 from "./components/Block10";
import Block11 from "./components/Block11";
import Block12 from "./components/Block12";
import Block13 from "./components/Block13";
import Block14 from "./components/Block14";
import Block15 from "./components/Block15";
import Block16 from "./components/Block16";
import Block17 from "./components/Block17";
import Block18 from "./components/Block18";

import "./app.css";

const date = new Date().toDateString();

const App = () => {
  return (
    <div className="container">
      <h1 className="date">{date}</h1>
      <div>
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Block7 />
        <Block8 />
        <Block9 />
        <Block10 />
        <Block11 />
        <Block12 />
        <Block13 />
        <Block14 />
        <Block15 />
        <Block16 />
        <Block17 />
        <Block18 />
      </div>
    </div>
  );
};
export default App;
