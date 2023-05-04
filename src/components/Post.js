import { useState } from "react";

export default function Post (post) {
  const [likeBtn, setLike] = useState('heart-outline');
  const [bookmarked, setBookmark] = useState('bookmark-outline')
  let [likes, updateLikeQt] = useState(10);

  function likePost(ev) {
    ev.preventDefault();

    if (likeBtn === 'heart-outline') {
      setLike('heart');
      updateLikeQt(likes+= 1);
    } else {
      setLike('heart-outline');
      updateLikeQt(likes-= 1);
    }
  }

  function likePostDBClick (ev) {
    ev.preventDefault();

    likeBtn !== 'heart' ? updateLikeQt(likes+= 1) : updateLikeQt(likes);
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
            <ion-icon name={likeBtn} onClick={likePost} data-test="like-post"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon name={bookmarked} onClick={savePost} data-test="save-post"></ion-icon>
        </div>
        <div class="likes">
          <img src="./assets/images/9gag.svg" alt=""/>
          <div>
            Curtido por <span>fulano</span> e <span>outras <span data-test="likes-number">{likes}</span>  pessoas</span>
          </div>
        </div>
      </div>
  );
}
//   Entendendo quais sao os tipos de dados e como eles funcionam
//   Entendendo tipagem de dados em typescript
// }

// Manipulacao de dados {
//   Como realizar operacoes
//   Como manipular, ordenar e filtrar lista de dados (map, sort, filter)
// }

// Funcoes assincronas {
//   Entendendo promise e observables
//   Como trabalhar com retorno de dados assincronos

//   Padrao de API rest {
//     Formato de dados em JSON
//     Enviando requests para uma API, tratando a response de retorno 
//   }
// }

// Instalacao/entendimento de ferramentes necessarias para o desenvolver {
//     Node - Ferramente para desenvolvimento em Java/Type script no backend
//     nvm - Gerenciador de versao Node
//     npm - Gerenciador de pacotes
  
//     Typescript

//     Angular - Ferramenta/framework para desenvolvimento de interfaces / frontend {
//       Estrutura de um projeto
//       Dependencias
//       Rotas - Navegacao entre paginas
//     }

//     git /github {
//       Criacao de repositorio github
//       Comandos (clone, commit, push)
//       Trabalhando em equipe / Branchs diferentes
//     }

//     API/Node/Backend {
//       Estrutura de projeto de uma API em Node
//     }
// } 