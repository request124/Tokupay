import { useState } from "react";

function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-white shadow-md">
                <nav className="flex justify-between items-center  my-[10px] mx-20 h-10 pb-13 sm:mx-5 lg:mx-20">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="">
                            <a className="flex justify-start items-center" href="/"><img className="w-[60%]" src="/Images/Component 1.png" alt="" /></a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[16px] space-x-5 text-black sm:hidden md:hidden lg:flex">
                        <li className="text-center font-medium"><a className=' pr-3' href="/">Industry solution</a></li>
                        <li className="text-center font-medium"><a className='pr-3' href="/">Overview</a></li>
                        <li className="text-center font-medium"><a className='pr-3' href="/">Benefits</a></li>
                        <li className="text-center font-medium"><a className='pr-3' href="/">Product features</a></li>
                        <a href="/wallet"><button  className="flex px-[30px] py-[12px] bg-[#EF0606] text-white border rounded-lg text-[13px] font-medium shadow-sm text-black sm:hidden md:hidden lg:flex" type="button">Get started</button></a>
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-[#E4E4E4] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-6">
                            <li className="font-medium"><a className='' onClick={showNav} href="/">Industry Solution</a></li>
                            <li className="font-medium"><a className='' onClick={showNav} href="/">Overview</a></li>
                            <li className="font-medium"><a className='' onClick={showNav} href="/">Benefits</a></li>
                            <li className="font-medium"><a className='' onClick={showNav}  href="/">Product features</a></li>
                            <a href="/wallet"><button  className="flex px-[15px] py-[8px] border rounded-lg text-[13px] font-medium shadow-sm text-black sm:my-[30px] sm:w-[50%]" type="button">Get started</button></a>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar