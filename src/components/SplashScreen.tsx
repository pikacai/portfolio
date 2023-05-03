interface Props {
    productIcon: string,
    companyLogo: string,
    animation: string
}

const SplashScreen = ( {productIcon, companyLogo, animation}:Props ) => {
    return (
        // translate-y-[100%]
        <div className='absolute h-screen w-screen overflow-hidden'>
            {/* Used position fixed to prevent users from seeing content by scrolling down */}
            <div className={`fixed z-20 translate-y-[100%] h-screen w-screen ${animation}`}>
                <img className='w-[5%] absolute m-[0_auto] left-0 right-0 top-[50%] -translate-y-[50%]' src={productIcon} alt="" />
                <img className='w-[10%] absolute m-[0_auto] left-0 right-0 top-[90%] -translate-y-[90%] brightness-0 invert' src={companyLogo}/>
                {/* <img className='w-[5%] absolute m-[0_auto] left-0 right-0 top-[50%] -translate-y-[50%]' src={'/portfolio/src/assets/googleMapsIcon.svg'} alt="" />
                <img className='w-[10%] absolute m-[0_auto] left-0 right-0 top-[90%] -translate-y-[90%] brightness-0 invert' src={'/portfolio/src/assets/google.png'}/> */}
            </div>
        </div>
    );
}
 
export default SplashScreen;