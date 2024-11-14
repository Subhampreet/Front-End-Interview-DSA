export default function Button({ label, buttonHandler }) {
    return (
      <button onClick={buttonHandler} className="button">
        {label}
      </button>
    );
  }
  