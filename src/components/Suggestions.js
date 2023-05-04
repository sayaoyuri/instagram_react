import Suggestion from "./Suggestion";

export default function Suggestions() {
  const suggestionList = [
    {
      userPhoto: "./assets/images/9gag.svg",
      userName: 'sayaoyuri'
    },
    {
      userPhoto: "./assets/images/9gag.svg",
      userName: 'sayaoyuri'
    },
    {
      userPhoto: "./assets/images/9gag.svg",
      userName: 'sayaoyuri'
    },
    {
      userPhoto: "./assets/images/9gag.svg",
      userName: 'sayaoyuri'
    }
  ];

  return (
    <div className="suggestions-wrapper">
      <ul>
        {suggestionList.map(suggestion => <Suggestion userPhoto={suggestion.userPhoto} userName={suggestion.userName}/>)}
      </ul>
    </div>
  );
}