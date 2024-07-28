import "./TimeLeft.css";

interface TimeLeftSpanProps {
  secondsLeft: number;
}

function TimeLeftSpan({ secondsLeft }: TimeLeftSpanProps) {
  return (
    <div className="timeLeft">
      <span className="time_1 bold">Time left: </span>
      <br />
      <span className="time_1 bold">{secondsLeft.toFixed(3)}s</span>
    </div>
  );
}

export default TimeLeftSpan;
