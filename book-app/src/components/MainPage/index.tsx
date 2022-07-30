import { Scaffold } from "../Scaffold";
import HeaderMainPage from "./header";
import Books from "./Sections/Book/Books";
function MainPage() {
  return (
    <Scaffold>
      <HeaderMainPage />
      <Books />
    </Scaffold>
  );
}

export default MainPage;
