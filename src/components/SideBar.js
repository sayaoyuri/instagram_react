import User from "./User";
import Suggestions from "./Suggestions";

export default function SideBar () {
  return (
    <section className="sidebar">
      <User/>
        <div>
          <h3>Sugestões para você</h3>
          <h1>Ver tudo</h1>
        </div>
        <Suggestions/>
        <footer>
          <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </footer>
      </section>
  );
}