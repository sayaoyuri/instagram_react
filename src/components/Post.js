import { useState } from "react";

export default function Post (post) {
  const [like, setLike] = useState('heart-outline');
  const [bookmarked, setBookmark] = useState('bookmark-outline')

  function likePost(ev) {
    ev.preventDefault();

    like === 'heart-outline' ? setLike('heart') : setLike('heart-outline');
  }

  function likePostDBClick (ev) {
    ev.preventDefault();

    setLike('heart');
  }

  function savePost(ev) {
    ev.preventDefault();

    bookmarked === 'bookmark-outline' ? setBookmark('bookmark') : setBookmark('bookmark-outline');
  }

  return (
    <div class="post" data-test="post">
      <header>
        <div>
          <img src={post.userPhoto} alt="" />
          <h1>{post.userName}</h1>
          </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </header>
        <img src={post.image} onDoubleClick={likePostDBClick} data-test="post-image" alt="" />
        <div class="interactions">
        <div>
        <ion-icon name={like} onClick={likePost} data-test="like-post"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        <ion-icon name={bookmarked} onClick={savePost} data-test="save-post"></ion-icon>
        </div>
      </div>
  );
}