function ProfileWorker () {
    return (
        <>
            <a className="flex justify-start items-center" href="/"><img className="w-[10%]" src="/Images/Component 1.png" alt="" /></a>
            <div className='mt-[10px] py-[40px] bg-red-600 w-[13%] h-[100vh] fixed rounded-md dash z-1000'>
                <h2 className='cursor-pointer py-[4] text-white text-[17px] mb-[20px]'>Dashboard</h2>
                <h2 className='cursor-pointer text-white text-[17px] mb-[20px]'>Workers</h2>
                <h2 className='cursor-pointer  text-white text-[17px] mb-[20px]'>Payroll</h2>
                <h2 className='cursor-pointer text-white text-[17px] mb-[20px]'>Benefits</h2>
                <h2 className='cursor-pointer text-white text-[17px] mb-[20px]'>Company</h2>
            </div>
            <section className='flex justify-between items-center mr-[30px]'>
                <div className='flex justify-left items-center ml-[220px]'>
                    <h1 className='text-[20px] mr-[10px] font-bold'>Workers</h1>
                    <button className='border-1 py-[7px] px-[7px] rounded-lg border-[#EF0400] text-[14px]' type="button">Add Workers</button>
                </div>
                <div className='flex justify-center items-center border py-[7px] rounded-lg w-[15%]'>
                    <h2 className='font-bold mr-[5px]'>0x233fgh421de20aa</h2>
                    <img className='w-[15%]' src="/Images/Metamask Logo.png" alt="" />
                </div>
            </section>
            <section className="ml-[230px] mt-[30px]">
                <div className="flex justify-left itemes-center self-center">
                    <img className="w-[4%] mr-[20px]" src="/Images/Ellipse 12.png" alt="" />
                    <h1 className="font-bold text-[18px] text-center mt-[20px]">James Micheal</h1>
                </div>
                <h2 className="mt-[20px]">Company role : Product Designer</h2>
                <div className="flex mt-[30px]">
                    <h2 className="mr-[10px]">payment details</h2>
                    <div className="flex">
                        <img className="w-[7%]" src="/Images/Metamask Logo.png" alt="" />
                        <h2>0x0453erdfe9870gh</h2>
                    </div>
                </div>
                <div className="flex mt-[30px]">
                    <div className="flex justify-center items-center flex-col border mr-[40px] py-[10px] px-[10px]">
                        <img className="w-[40%] mb-[20px]" src="/Images/Profile.png" alt="" />
                        <h1>Worker Details</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col border py-[10px] px-[10px]">
                        <img className="w-[40%] mb-[20px]"  src="/Images/Transaction.png" alt="" />
                        <h1>Transaction history </h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProfileWorker