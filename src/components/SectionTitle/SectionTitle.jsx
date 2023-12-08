import { Typewriter } from "react-simple-typewriter";


const SectionTitle = ({heading, animateHeading}) => {
 
    return (
        <div className="mx-auto text-center md:w-4/12">
            
            <h1 className="border-b-4 border-black rounded-md py-4 text-5xl font-semibold">
        {heading}{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[animateHeading]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h1>
        </div>
    );
};

export default SectionTitle;