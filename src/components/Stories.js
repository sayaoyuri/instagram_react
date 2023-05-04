import Story from "./Story";

export default function Stories () {
  const storyList = [];

  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);
  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);
  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);
  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);
  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);
  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);
  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);
  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);
  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);
  storyList.push(<Story img='./assets/images/9gag.svg' user='sayaoyuri' />);

  return (
    <section>
      <ul className="stories-wrapper">
        {storyList.map(story => <li>{story}</li>)}
      <ion-icon name="chevron-forward-circle"></ion-icon>
      </ul>
    </section>
  );
}