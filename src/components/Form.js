import '../styles/Form.scss';

function Form(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const changeLetter = () => {};
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        value={props.lastLetter}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </form>
  );
}
export default Form;
