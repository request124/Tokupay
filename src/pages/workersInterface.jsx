function WorkerInterface () {
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
            <section className='grid grid-cols-3 gap-8 mt-[40px] ml-[270px]'>
                    <div className='flex justify-center items-center flex-col border py-[20px] w-[80%]'>
                        <img className='w-[17%] mb-[20px]' src="/Images/Ellipse 6.png" alt="" srcset="" />
                        <h2 className='mb-[20px] text-[17px] font-bold'>Jackson will</h2>
                        <p className='mb-[20px] text-grey-700'>Hr manager</p>
                        <a href="" className='py-[10px] px-[20px] bg-red-600 text-white rounded-md'><button type="button">details</button>t</a>
                    </div>
                    <div className='flex justify-center items-center flex-col border py-[20px] w-[80%]'>
                        <img className='w-[17%] mb-[20px]' src="/Images/Ellipse 10.png" alt="" srcset="" />
                        <h2 className='mb-[20px] text-[17px] font-bold'>Chen shawn</h2>
                        <p className='mb-[20px] text-grey-700'>opperating officer</p>
                        <a href="" className='py-[10px] px-[20px] bg-red-600 text-white rounded-md'><button type="button">details</button>t</a>
                    </div>
                    <div className='flex justify-center items-center flex-col border py-[20px] w-[80%]'>
                        <img className='w-[17%] mb-[20px]' src="/Images/Ellipse 11.png" alt="" srcset="" />
                        <h2 className='mb-[20px] text-[17px] font-bold'>Anbrose devs</h2>
                        <p className='mb-[20px] text-grey-700'>product marketer</p>
                        <a href="" className='py-[10px] px-[20px] bg-red-600 text-white rounded-md'><button type="button">details</button>t</a>
                    </div>
                    
            </section>
            <section className='grid grid-cols-3 gap-8 mt-[40px] ml-[270px]'>
                    <div className='flex justify-center items-center flex-col border py-[20px] w-[80%]'>
                        <img className='w-[17%] mb-[20px]' src="/Images/Ellipse 6.png" alt="" srcset="" />
                        <h2 className='mb-[20px] text-[17px] font-bold'>Jackson will</h2>
                        <p className='mb-[20px] text-grey-700'>Hr manager</p>
                        <a href="" className='py-[10px] px-[20px] bg-red-600 text-white rounded-md'><button type="button">details</button>t</a>
                    </div>
                    <div className='flex justify-center items-center flex-col border py-[20px] w-[80%]'>
                        <img className='w-[17%] mb-[20px]' src="/Images/Ellipse 10.png" alt="" srcset="" />
                        <h2 className='mb-[20px] text-[17px] font-bold'>Chen shawn</h2>
                        <p className='mb-[20px] text-grey-700'>opperating officer</p>
                        <a href="" className='py-[10px] px-[20px] bg-red-600 text-white rounded-md'><button type="button">details</button>t</a>
                    </div>
                    <div className='flex justify-center items-center flex-col border py-[20px] w-[80%]'>
                        <img className='w-[17%] mb-[20px]' src="/Images/Ellipse 11.png" alt="" srcset="" />
                        <h2 className='mb-[20px] text-[17px] font-bold'>Anbrose devs</h2>
                        <p className='mb-[20px] text-grey-700'>product marketer</p>
                        <a href="" className='py-[10px] px-[20px] bg-red-600 text-white rounded-md'><button type="button">details</button>t</a>
                    </div>
                    
            </section>
        </>
    )
}
export default WorkerInterface