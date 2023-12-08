
import { Typewriter } from "react-simple-typewriter";
const PageTitle = ({pageTitle, animateTitle}) => {
    return (
        <div>
             <div className="py-8">
           <div
             className="hero rounded-lg"
             style={{
               backgroundImage:
                 "url(https://i.ibb.co/XWZ6GMx/cool-background-5.png)",
             }}
           >
             <div className="hero-overlay bg-opacity-60 py-16 rounded-lg"></div>
             <div className="hero-content text-center text-neutral-content rounded-lg py-16">
               <div className="max-w-4xl">
               <h1 className="py-4 text-5xl font-semibold">
       {pageTitle} {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[animateTitle]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}/>
        </span>
      </h1>
              
               </div>
             </div>
           </div>
         </div>
        </div>
    );
};

export default PageTitle;