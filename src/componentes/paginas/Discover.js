import Covers from "../imagenes/covers.jpg";
import Microphone from "../imagenes/microphone.svg";
import More from "../imagenes/more.svg";
import Twitter from "../imagenes/twitter.svg";

export default function Discover() {
    return (
        <section className ="Discover-P" style={{backgroundColor:"#302e33a,display:"flex,justifyContent :"center,gap:"5%,paddingTop :"0",paddingBottom:"10%"}} 
 
            <div>
                <div className="Text2">
                    <h1> Discover new Music</h1>
                </div>

                <div className="Icons">
                    <div>
                        <button>
                            <img src={Microphone} alt="Icons" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={More} alt="Icons" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={Twitter} alt="Icons" />
                        </button>
                    </div>
                </div>

                <div className="Text3">
                    <p>
                        By joing you can benefit by listening to the lates albums released.
                    </p>
                </div>
            </div>

            <div>
                <img src={Covers} alt="Cover" style={{ width: "50%" }} />
            </div>
        </div>
        </section>
    );
}
