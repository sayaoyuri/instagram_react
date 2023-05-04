import Suggestion from "./Suggestion";

export default function Suggestions() {
  const suggestionList = [];

  suggestionList.push(<Suggestion userPhoto="./assets/images/9gag.svg" userName='sayaoyuri' />);
  suggestionList.push(<Suggestion userPhoto="./assets/images/9gag.svg" userName='sayaoyuri' />);
  suggestionList.push(<Suggestion userPhoto="./assets/images/9gag.svg" userName='sayaoyuri' />);
  suggestionList.push(<Suggestion userPhoto="./assets/images/9gag.svg" userName='sayaoyuri' />);

  return (
    <div className="suggestions-wrapper">
      <ul>
        {suggestionList.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}