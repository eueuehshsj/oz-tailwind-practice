import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header classname="flex flex-wrap justify-between gap-20 pt-20 pb-20 pr-40 pl-40" />
      <section>
        {contents.map((el) => (
          <Content
            classname="flex flex-col items-start gap-5"
            key={el.id}
            content={el}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
