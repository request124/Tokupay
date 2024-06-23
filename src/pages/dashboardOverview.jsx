function DashboardOverview () {
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
                <div className='ml-[220px]'>
                    <h1 className='text-[20px] mr-[10px] font-bold'>Welcome Zkysnc Startup</h1>
                    <p className="mt-[10px]">Dashboard overview</p>
                </div>
                <div className='flex justify-center items-center border py-[7px] rounded-lg w-[15%]'>
                    <h2 className='font-bold mr-[5px]'>0x233fgh421de20aa</h2>
                    <img className='w-[15%]' src="/Images/Metamask Logo.png" alt="" />
                </div>
            </section>
        </>
    )
}
export default DashboardOverview