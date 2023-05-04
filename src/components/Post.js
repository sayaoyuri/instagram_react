export default function Post (post) {
  return (
    <div class="post">
      <header>
        <div>
          <img src={post.userPhoto} alt="" />
          <h1>{post.userName}</h1>
          </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </header>
        <img src={post.image} alt="" />
        <div class="interactions">
        <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
  );
}