import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

function App() {
    return (
        <div className={'app'}>
            <Header/>

            <div className={'container'}>
                <Sidebar/>
                <AppRoutes/>
            </div>

            <Footer/>
        </div>
    )
}
export default App;