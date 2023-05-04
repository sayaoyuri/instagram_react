export default function Suggestion(suggestion) {
  return (
    <div class="suggestion">
      <div>
        <img src={suggestion.userPhoto} alt="" />
        <div>
          <h1>{suggestion.userName}</h1>
          <p>Segue você</p>
        </div>
      </div>
      <p class="follow">Seguir</p>
    </div>
  );
}