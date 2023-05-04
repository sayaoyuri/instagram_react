import Post from "./Post";

export default function Posts () {
  const postList = [];
  
  
  function createPost(userPhoto, userName, image) {
    postList.push(<Post userPhoto={userPhoto} userName={userName} image={image}/>)
  }

  createPost('./assets/images/gato-telefone.svg', 'sayaoyuri', './assets/images/gato-telefone.svg');
  createPost('./assets/images/dog.svg' , 'sayaoyuri', './assets/images/dog.svg');
  createPost('./assets/images/dog.svg' , 'sayaoyuri', './assets/images/dog.svg');

  return (
    <section class="posts-wrapper">
      <ul>
        {postList.map((post) => <li>{post}</li>)}
      </ul>
    </section>
  );
}