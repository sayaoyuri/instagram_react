export default function Story(story) {
  return (
    <div class="story">
      <img
        src="./assets/images/stories_background.jpg"
        alt="Storie background"
      />
      <img src={story.img} alt="User avatar" />
      <p>{story.user}</p>
    </div>
  );
}