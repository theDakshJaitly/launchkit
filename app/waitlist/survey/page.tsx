import Script from "next/script";

export default function SurveyPage() {
    return (
        <div className="w-full h-screen bg-black overflow-hidden relative">
            <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

            <iframe
                data-tally-src="https://tally.so/r/jaBPN1?transparentBackground=1"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Help make LaunchX better!"
                className="absolute top-0 right-0 bottom-0 left-0 border-0"
            />
        </div>
    );
}
