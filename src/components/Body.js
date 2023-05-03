import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";
import BottomNav from "./BottomNav";

export default function Body () {
  return (
    <div class="main-wrapper">
      <main>
        <Stories/>
        <Posts/>
      </main>
      <SideBar/>
      <BottomNav/>
    </div>
  );
}