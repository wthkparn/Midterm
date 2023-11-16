export const HomeComponent = () => {
    return <div>
        <div style={{ display: "flex" }}>

            <div style={{ width: "15%" }}>
                <img src={'./SRlogo.png'} style={{
                    objectFit: "cover",
                    width: "100%",
                    paddingLeft: "10%"
                }}alt="Error" /> <div style={{ fontSize: "15px" }}>
                    Wethaka Uphata 6101545
                </div>
            </div>


            <img src={'./top.webp'} style={{
                width: "80%",
                objectFit: "cover",
                left: "5%",
                position: "relative"
            }}alt="Error" />

        </div>

        <div style={{ textAlign: "center", paddingTop: "3%" }}>

            {<img src={'./main.jpg'} style={{

            }}alt="Error" />}
        </div>

    </div>
}

