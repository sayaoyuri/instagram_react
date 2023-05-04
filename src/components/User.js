import { useState } from "react";

export default function User() {
  const [userPhoto, setUserPhoto] = useState('https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png')
  const [userName, setName] = useState('Usuário');

  function changeUserPhoto(ev) {
    ev.preventDefault();

    const newPhoto = prompt('Informe o endereco da nova imagem do seu perfil');
    newPhoto ? setUserPhoto(newPhoto) : setUserPhoto(userPhoto);
  }

  function changeUserName(ev) {
    ev.preventDefault();

    const newName = prompt("Informe o seu nome de usuario");
    newName ? setName(newName) : setName(userName);
  }

  return (
    <header>
      <img  src={userPhoto} onClick={changeUserPhoto} alt="" />
      <div class="user">
        <h1>{userName}</h1>
        <ion-icon name="pencil-outline" onClick={changeUserName}></ion-icon>
      </div>
    </header>
  )
}