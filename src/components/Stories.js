import Story from "./Story";

export default function Stories () {
  const storyList = [
    {
      img: './assets/images/9gag.svg',
      user: 'sayaoyuri'
    },
    {
      img: './assets/images/9gag.svg',
      user: 'sayaoyuri'
    },
    {
      img: './assets/images/9gag.svg',
      user: 'sayaoyuri'
    },
    {
      img: './assets/images/9gag.svg',
      user: 'sayaoyuri'
    },
    {
      img: './assets/images/9gag.svg',
      user: 'sayaoyuri'
    },
    {
      img: './assets/images/9gag.svg',
      user: 'sayaoyuri'
    },
    {
      img: './assets/images/9gag.svg',
      user: 'sayaoyuri'
    },
    {
      img: './assets/images/9gag.svg',
      user: 'sayaoyuri'
    }
  ];

  return (
    <section>
      <ul className="stories-wrapper">
        {storyList.map(story => <Story img={story.img} user={story.user}/>)}
      <ion-icon name="chevron-forward-circle"></ion-icon>
      </ul>
    </section>
  );
}