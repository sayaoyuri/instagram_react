export default function Navbar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <div>
          <ion-icon name="logo-instagram" class="mobile-show"></ion-icon>
          <img
            class="logo"
            src="./assets/images/logo.png"
            alt="Instagram logo"
          />
        </div>
        <input type="text" name="" id="search" placeholder="Search" />
        <div>
          <ion-icon name="paper-plane-outline" class="mobile-show"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
}