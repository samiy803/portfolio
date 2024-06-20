// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import BackgroundGradient from "./components/ui/background-gradient";
import ChangeColor from "./components/ui/change-color";
import DotsBackground from "./components/ui/dots-background";
import Hero from "./components/ui/hero";
import ScrollingText from "./components/ui/scrolling-text";

function App() {
    return (
        <>
            <BackgroundGradient />
            <DotsBackground />
            <ScrollingText text="&nbsp; developer  developer &nbsp;" />
            <Hero />
            <ChangeColor />
            {/* <CardContainer className="inter-var">
                <CardBody className="bg-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        Make things float in air
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        Hover over this card to unleash the power of CSS
                        perspective
                    </CardItem>
                    <CardItem
                        translateZ="100"
                        rotateX={20}
                        rotateZ={-10}
                        className="w-full mt-4"
                    >
                        <img src="/images/3d-card.png" alt="3d card" />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            translateX={-40}
                            as="button"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Try now →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            translateX={40}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Sign up
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer> */}
        </>
    );
}

export default App;
