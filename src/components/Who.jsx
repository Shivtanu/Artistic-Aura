import Section from "./Section";
import Button2 from "./Button2";

const Who = () => {
    return (
        <Section>
        <section className="who-we-are m-9 mt-[11rem] ml-[3rem] mr-[3rem] mb-[15rem]" id="about">
            <div className="w-full flex just justify-center">
                <div className="list-bullet"></div>
                    <h1 className="text-[3vw] mb-[7rem]">Live Exhibitions</h1>
            </div>
            <div className="w-[100%] ">
            <div className="w-[60%] py-11">
                <h1 className="font-tt text-left text-3xl tracking-normal about-text" data-aos="fade-up" data-aos-anchor-placement="top top">
                Our web app provides a livestreaming platform tailored for art exhibitions, allowing global access to diverse artworks. It features high-quality video streaming, live commentary, and interactive virtual tours. This service connects art enthusiasts to new trends and timeless pieces from anywhere. Experience art exhibitions from the comfort of your home with just a click.
                </h1>
            </div>
            <Button2 className="button-primary transition-transform hover:translate-y-1 py-11" href="https://lvpr.tv/broadcast/2fa5-v174-qnlo-3knr">
          <span>Go Live!</span>
        </Button2>
            <Button2 className="button-primary transition-transform hover:translate-y-1 py-11" href="">
          <span>Go To Auction</span>
        </Button2>
            </div>
        </section>

        </Section>
        

    );
};

export default Who;