import LandingHeader from "./LandingPageHeader";

const LandingLayout = ({children}) => {
    return ( 
        <>
            <LandingHeader/>
                <div className="">
                <main>{children}</main>
            </div>
        </>
     );
}
 
export default LandingLayout;