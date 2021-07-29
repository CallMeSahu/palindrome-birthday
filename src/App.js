import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <section className="about-section">
        <h2>Palindrome Birthday</h2>
        <p>
          A palindrome is a word, number, phrase, or other sequence of
          characters which reads the same backward as forward.
        </p>
        <button>
          <a href="#workingSection" /> Find Out
        </button>
      </section>
      <section className="working-section" id="workingSection"></section>
    </div>
  );
}
