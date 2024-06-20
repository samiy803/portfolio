export default function ScrollingText({ text }: { text: string }) {
    return (
        <div className="w-screen opacity-50 z-[-1]">
            <div className="absolute flex h-screen text-[30rem] font-bold text-[#0f0f0f] font-[Lilita_One] text-nowrap">
                <span
                    style={{
                        animation: "slide 180s linear infinite",
                        animationDelay: "-90s",
                        transform: "translateX(0%)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        display: "inline-block",
                        alignContent: "center",
                    }}
                >
                    {text}
                </span>
            </div>
            <div className="absolute flex h-screen text-[30rem] font-bold text-[#0f0f0f] font-[Lilita_One] text-nowrap">
                <span
                    style={{
                        animation: "slide 180s linear infinite",
                        transform: "translateX(100%)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        display: "inline-block",
                        alignContent: "center",
                    }}
                >
                    {text}
                </span>
            </div>
        </div>
    );
}
