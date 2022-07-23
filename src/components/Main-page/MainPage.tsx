import BottomFooter from "./BottomFooter/BottomFooter"
import TemperatureWidget from "./TempWidget/TemperatureWidget"

function MainPage() {
    return (
        <>
            <div className="container mt-6 p-4 md:p-8 mx-auto">
                <TemperatureWidget />
                <BottomFooter />

            </div>

        </>
    )
}
export default MainPage