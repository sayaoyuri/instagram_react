import Post from "./Post";

export default function Posts () {
  const postList = [
    {
      userPhoto: './assets/images/bad.vibes.memes.svg',
      userName: 'sayaoyuri',
      image: './assets/images/gato-telefone.svg'
    },
    {
      userPhoto: './assets/images/meowed.svg',
      userName: 'sayaoyuri',
      image: './assets/images/gato-telefone.svg'
    },
    {
      userPhoto: './assets/images/9gag.svg',
      userName: 'sayaoyuri',
      image: './assets/images/dog.svg'
    }
  ];
  
  return (
    <section className="posts-wrapper">
      <ul>
        {postList.map(post => <Post userPhoto={post.userPhoto} userName={post.userName} image={post.image} />)}
      </ul>
    </section>
  );
}