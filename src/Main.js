import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Connect from "./sections/Connect";

export default function Main(){
    return(
        <div>
            <About />
            <Skills />
            <Portfolio />
            <Connect />
        </div>
    )
}