import './Buttons.css';

function ButtonsBar(props) {
  return <div className="narrow-panel">
    {props.children}
  </div>;
}

const ButtonsBarScoreUpButton = (props) => (
  <button onClick={props.onClick}>⬆️</button>
);

const ButtonsBarScoreResetButton = (props) => (
  <button onClick={props.onClick}>🔄</button>
);

ButtonsBar.ScoreUpButton = ButtonsBarScoreUpButton;
ButtonsBar.ScoreResetButton = ButtonsBarScoreResetButton;

export default ButtonsBar;
