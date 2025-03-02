import Diagram from "../../public/diagram.png"
import Image from "next/image";

const Projects = () => {
    return (
      <div className="flex flex-col min-h-screen border-t-2 border-l-2 border-black">
       <section className="roboto w-full overflow-x-scroll bg-green-100 flex flex-row  whitespace-nowrap  h-[93%] scrollbar-hide" style={{height:"93%"}}>
        <div className="w-[90%] min-h-full font-bold tracking-wide px-40 " style={{ fontSize: "80px" }}>
          Creatures of Culture. <br />
          Masters of Digital. <br />
          Social DNA.
        </div>
        <div className="w-full bg-blue-100 justify-center  flex items-center  px-8 py-4"> 
          {/* Project 1 */}
          <div className="w-[500px] h-[500px]  bg-green-200 flex items-center justify-center rounded-lg flex-shrink-0">
            <Image 
              src={Diagram} alt="Project 1" 
              unoptimized={true}
              height={400} 
              width={300}
              quality={100}
              style={{ width: '100%', height: '100%', borderRadius: '5%' }} 
            />
          </div>
          {/* Project 2 */}
          <div className="w-[500px] h-[500px]  flex items-center justify-center rounded-lg flex-shrink-0">
            <Image 
              src={Diagram} alt="Project 2" 
              unoptimized={true}
              height={300} 
              width={300}
              quality={100}
              style={{ width: '100%', height: '100%', borderRadius: '5%' }} 
            />
          </div>
          {/* Project 3 */}
          <div className="w-[500px] h-[500px]  flex items-center justify-center rounded-lg flex-shrink-0">
            <Image 
              src={Diagram} alt="Project 3" 
              unoptimized={true}
              height={300} 
              width={300}
              quality={100}
              style={{ width: '100%', height: '100%', borderRadius: '5%' }} 
            />
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>


        <footer className="fixed  bottom-0 w-full py-4 h-[7.5%]">
          <div className="tracking-wide absolute w-full flex justify-between items-center">
            {/* Border Wrapper */}
            <div
              className="w-full h-full flex  justify-between items-center"
              style={{
                borderTopWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRightWidth: "1px",
                borderColor: "black",
                borderBottomLeftRadius:"10px",
                borderBottomRightRadius:"10px",

              }}
            >
              {/* Each Button with Same Padding */}
              <button className="flex-1 px-10 py-2" style={{ borderRightWidth: "1px", borderColor: "black" }}>
                WORK
              </button>
              <button className="flex-1 px-10 py-2" style={{ borderRightWidth: "1px", borderColor: "black" }}>
                ABOUT
              </button>
              <button className="flex-1  py-2" style={{ borderRightWidth: "1px", borderColor: "black" }}>
                NOHARA
              </button>
              <button className="flex-1 px-10 py-2" style={{ borderRightWidth: "1px", borderColor: "black" }}>
                COMMUNITY
              </button>
              <button className="flex-1 px-10 py-2" style={{  borderColor: "black" }}>
                CONNECT
              </button>
            </div>
          </div>
        </footer>
             
      </div>
    );
  };
  
  export default Projects;