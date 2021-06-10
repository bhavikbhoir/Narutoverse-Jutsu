import Sharingan from "./Jutsus/Sharingan";
import Rasengan from "./Jutsus/Rasengan";
import "./styles.scss";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>SUN VS MOON</h1>
      <Sharingan />
      <Rasengan />
    </div>
  );
}
