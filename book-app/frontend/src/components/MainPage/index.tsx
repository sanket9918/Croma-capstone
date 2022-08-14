import { Scaffold } from "../Scaffold";
import BottomFooter from "./BottomFooter";
import HeaderMainPage from "./header";
import Books from "./Sections/Book/Books";
function MainPage() {
  return (
    <Scaffold>
      <HeaderMainPage />
      <Books />
      <BottomFooter />
    </Scaffold>
  );
}

export default MainPage;
