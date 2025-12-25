import bgImage from "../assets/HomePageBG.avif"
import AnimatedContent from "../Components/AnimatedContent";
import Nav from "../Components/home/Nav";

function Home() {
    return <>
        <div
            className="bg-cover bg-center bg-no-repeat h-screen backdrop-blur-xl"
            style={{ backgroundImage: `url(${bgImage})` }}
        >

            <Nav/>
            
            <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
            >
                <div
                    className="h-screen flex items-center justify-center text-9xl text-red-700"
                >
                    Nescafe
                </div>
            </AnimatedContent>

        </div>
    </>
}

export default Home