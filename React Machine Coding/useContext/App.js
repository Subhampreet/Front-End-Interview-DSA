import {
  ThemeContext,
  ThemeProvider,
} from "./components/useContext/ThemeContext";
import ThemeToggler from "./components/useContext/ThemeToggler";
import "./styles.css";

export default function App() {
  // const [value, setValue] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setValue((val) => val + 1);
  //   }, 100);
  // }, []);

  return (
    <div className="App">
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
    </div>
  );
}
