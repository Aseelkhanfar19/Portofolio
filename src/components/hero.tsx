interface HeroProps {
    name: string;
    age: number;
}

function Hero({name , age}:HeroProps){
    return (
        <>
            <h1> This is {name} , welcome to my portfolio , my age is {age} </h1>
            <p> I am a web developer and I love to create beautiful and functional websites. I have experience in HTML, CSS, JavaScript, React, and Node.js. I am always eager to learn new technologies and improve my skills. </p>
        </>
    );
}

export default Hero;