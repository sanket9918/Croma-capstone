import { useParams } from "react-router-dom";
import Header from "../Header/header";
import { Scaffold } from "./../Scaffold";
import BottomFooter from "./BottomFooter/BottomFooter";
import TemperatureWidget from "./TempWidget/TemperatureWidget";

function MainPage(props: any) {
  const params = useParams();
  const location = params.location ?? "Bengaluru";
  return (
    <>
      <Scaffold>
        <Header />
        <TemperatureWidget location={location} />
        <BottomFooter />
      </Scaffold>
    </>
  );
}
export default MainPage;
