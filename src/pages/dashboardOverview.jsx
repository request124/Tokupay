function DashboardOverview () {
    return (
        <>
            <a className="flex justify-start items-center" href="/"><img className="w-[10%]" src="/Images/Component 1.png" alt="" /></a>
            <div className='mt-[10px] py-[40px] bg-red-600 w-[13%] h-[100vh] fixed rounded-md dash z-1000'>
                <a href="/dashboard"><h2 className='cursor-pointer py-[4] text-white text-[17px] mb-[20px]'>Dashboard</h2></a>
                <a href="/workers"><h2 className='cursor-pointer text-white text-[17px] mb-[20px]'>Workers</h2></a>
                <a href="/payroll"><h2 className='cursor-pointer  text-white text-[17px] mb-[20px]'>Payroll</h2></a>
                <a href=""><h2 className='cursor-pointer text-white text-[17px] mb-[20px]'>Benefits</h2></a>
                <a href=""><h2 className='cursor-pointer text-white text-[17px] mb-[20px]'>Company</h2></a>
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
            <section className='grid grid-cols-2 gap-4 ml-[220px] mt-[20px] border-2 w-[50%] py-[20px] rounded-xl'>
                <div className="ml-[40px]">
                    <div className="flex">
                        <img className="w-[9%]" src="/Images/Drop Down.png" alt="" srcset="" />
                        <h1 className="text-[17px] font-medium">Income this month</h1>
                    </div>
                    <div className="flex mt-[10px]">
                        <h1 className="mx-[30px] font-medium">20,000 JOC</h1>
                        <h1 className="font-medium text-[#038245] bg-[#C7FAE7] py-[5px] px-[10px] rounded-lg">+20%</h1>
                    </div>
                </div>
                <div className="">
                    <div className="flex">
                        <img className="w-[6%]" src="/Images/Scroll Up.png" alt="" srcset="" />
                        <h1 className="text-[17px] font-medium mt-[5px] ml-[5px]">Expenses this month</h1>
                    </div>
                    <div className="flex mt-[10px]">
                        <h1 className="mx-[30px] font-medium">10,000 JOC</h1>
                        <h1 className="font-medium text-[#EF0606] bg-[#FAC7C7] py-[5px] px-[10px] rounded-lg">-10%</h1>
                    </div>
                </div>
            </section>
            <div className="ml-[220px] grid grid-cols-2 gap-8">
                <div className="border-2 mt-[5px] w-[140%] rounded-xl">
                    <section className="pl-[40px] py-[20px]">
                    <div className="grid grid-cols-2">
                        <h1 className="font-bold text-[25px]">Payment History</h1>
                        <div className="flex">
                            <h1 className="mr-[15px] bg-[#D9D9D9] py-[3px] px-[4px] font-bold">1M</h1>
                            <h1 className="mr-[15px] bg-[#D9D9D9] py-[3px] px-[4px] font-bold">3M</h1>
                            <h1 className="mr-[15px] bg-[#D9D9D9] py-[3px] px-[4px] font-bold">6M</h1>
                            <h1 className="bg-[#D9D9D9] py-[3px] px-[4px] font-bold">1Y</h1>
                        </div>
                    </div>
                    <div className="flex mt-[20px]">
                        <h1 className="font-medium text-[#038245] bg-[#C7FAE7] py-[5px] px-[10px] rounded-lg text-[18px]">+20%</h1>
                        <h1 className="mx-[30px] font-medium text-[18px]">15000 JOC</h1>
                    </div>
                    <p className="pl-[100px] text-[17px] text-[#5C5B5B]">vs last month</p>
                    </section>
                    <div className="flex justify-center items-center flex-col">
                        <h2>Tuesday feb 7,2024</h2>
                        <button className="border py-[10px] px-[15px] rounded-lg font-medium" type="button">Revenue 3000JOC</button>
                    </div>
                    <div className="pl-[40px]">
                        <img className="w-[95%]" src="/Images/Vector.png" alt="" srcset="" />   
                    </div>
                    <div className="flex justify-center items-center font-medium">
                        <h3 className="pr-[20px]">Feb 2</h3>
                        <h3 className="pr-[20px]">feb4</h3>
                        <h3 className="pr-[20px]">feb5</h3>
                        <h3 className="pr-[20px]">feb10</h3>
                        <h3 className="pr-[20px]">feb15</h3>
                        <h3 className="pr-[20px]">feb20</h3>
                        <h3 className="pr-[20px]">feb25</h3>
                        <h3 className="pr-[20px]">feb30</h3>
                        <h3 className="pr-[20px]">mar5</h3>
                        <h3 className="pr-[20px]">mar10</h3>
                        <h3 className="pr-[20px]">mar15</h3>
                        <h3 className="pr-[20px]">mar20</h3>
                        <h3 className="pr-[20px]">mar25</h3>
                        <h3 className="pr-[20px]">mar30</h3>   
                    </div>
                </div>
                <div className="mr-[90px] border-2 px-[30px] py-[30px] rounded-xl w-[40%] ml-[320px]">
                    <h1 className="font-bold text-[20px] text-center mb-[20px]">Transaction History</h1>
                    <div>
                        <div className="flex justify-center items-center mb-[40px] mr-[10px]">
                            <img className="w-[20%] mr-[9px]" src="/Images/Ellipse 1.png" alt="" />
                            <h2 className="font-medium text-[17px]">Jamal  julius</h2>
                        </div>
                        <div className="flex justify-center items-center mb-[40px]">
                            <img className="w-[20%] mr-[9px]" src="/Images/Ellipse 2.png" alt="" />
                            <h2 className="font-medium text-[17px]">Ambrose will</h2>
                        </div>
                        <div className="flex justify-center items-center mb-[40px] mr-[25px]">
                            <img className="w-[20%] mr-[9px]" src="/Images/Ellipse 3.png" alt="" />
                            <h2 className="font-medium text-[17px]">chin says</h2>
                        </div>
                        <div className="flex justify-center items-center mb-[40px] ml-[20px]">
                            <img className="w-[20%] mr-[9px]" src="/Images/Ellipse 4.png" alt="" />
                            <h2 className="font-medium text-[17px]">Wuhan chan</h2>
                        </div>
                        <div className="flex justify-center items-center mb-[30px]">
                            <img className="w-[20%] mr-[19px]" src="/Images/Ellipse 5.png" alt="" />
                            <h2 className="font-medium text-[17px]">Dell Rose</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardOverview