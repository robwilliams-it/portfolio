const Hero = () => {

    return (
        <div
          style={{
            height: "100vh", 
            position: "relative",
            top: -40,
            zIndex: "-1",
            display: "grid",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <h3>
              Nice to meet ya! I'm
            </h3>
            <h1>
              Rob
            </h1>
            <h2>
              Full Stack Software Engineer
            </h2>
          </div>
        </div>
    )
}

export default Hero;