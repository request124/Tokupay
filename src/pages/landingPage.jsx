import Navbar from '../components/nav.jsx'

function LandingPage () {
    return (
        <>
            <Navbar/>
            <div className="grid grid-cols-2 pt-[170px] px-[60px] self-center pb-[60px] bg-[#EF0606] sm:px-[30px] sm:grid-cols-1 lg:px-[90px] lg:grid-cols-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='mt-[5px]'>
                    <h1 className='font-bold text-[25px] text-white w-[70%] mb-[20px] sm:w-full sm:text-[25px] lg:w-[70%] lg:text-[35px]'>Tokupayroll</h1>
                    <p className='text-[40px] font-medium text-white w-[60%] mb-[20px] sm:w-full md:w-[70%] lg:w-[60%]'>Revolutionize your payroll with Blockchain: Seamless, secure and instant payments</p>
                    <div className='absolute bg-white w-[10%] top-[50%] left-[40%] px-[10px] py-[5px] rounded-md flex justify-center items-center flex-col'>
                        <img className='w-[40%]' src="/Images/Verified Account.png" alt="" srcset="" />
                        <p className='text-[20px]'>Payroll is done!</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-[70%]' src="/Images/Worker, Manager and Designer in Chinese Factory Stock Image - Image of dressmaker, industry_ 30003755 1.png" alt="" />
                </div>
            </div>
            <section className='grid grid-cols-2 gap-4 pt-[50px] pl-[90px]'>
                <div>
                    <h1 className='font-bold text-[25px] w-[90%] mb-[20px] sm:w-full sm:text-[25px] lg:w-[9 cla0%] lg:text-[25px]'>Seamless Transactions with Japan Stablecoin</h1>
                    <p className='w-[80%] font-medium text-[20px]'>Eliminate the complexities of currency exchange and fluctuating rates. With Japan stablecoin, your payroll transactions are straightforward, efficient, and cost-effective. Keep your finances steady and your employees happy.</p>
                </div>
                <div>
                    <img className='w-[60%]' src="/Images/How Japan's Lifting of Stablecoin Ban may affect Crypto world_ 1.png" alt="" />
                </div>
            </section>
        <section className='pt-[50px] px-[60px] pb-[30px]'>
            <h1 className='text-center font-bold text-[40px]'>EXPLORE THE FEATURES</h1>    
            <div className='grid grid-cols-3 gap-4 mt-[70px]'>
                <div className='flex justify-center items-center flex-col border-2 border-black py-[20px] px-[5px] rounded-lg'>
                    <img className='w-[17%]' src="/Images/Card Payment.png" alt="" />
                    <h1 className='text-[20px] font-bold mb-[10px] mt-[20px]'>Instant Payments, Zero Hassles</h1>
                    <p className='text-[18px] font-medium w-[87%]'>Experience the future of payroll with our blockchain-powered platform. Say goodbye to delays and banking intermediaries—payments are processed instantly and securely.</p>
                </div>
                <div className='flex justify-center items-center flex-col border-2 border-black py-[20px] px-[5px] rounded-lg'>
                    <img className='w-[17%]' src="/Images/Security Configuration.png" alt="" />
                    <h1 className='text-[20px] font-bold mb-[10px] mt-[20px]'>Unmatched Security and Transparency</h1>
                    <p className='text-[18px] font-medium w-[87%]'>Leveraging the power of blockchain, we ensure that every transaction is encrypted and immutable. Our platform offers unparalleled transparency and security, giving you peace of mind.</p>
                </div>
                <div className='flex justify-center items-center flex-col border-2 border-black py-[20px] px-[5px] rounded-lg'>
                    <img className='w-[17%]' src="/Images/Dollar coin.png" alt="" />
                    <h1 className='text-[20px] font-bold mb-[10px] mt-[20px]'>Cost-Effective and Efficient</h1>
                    <p className='text-[18px] font-medium w-[87%]'>Reduce overhead costs associated with traditional payroll systems. Our blockchain solution minimizes transaction fees and administrative burdens, allowing you to focus on what really matters growing your business.</p>
                </div>
            </div>
        </section>
        <section className='pt-[50px] px-[60px] pb-[30px]'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-[35px] font-bold mb-[20px]'>Global Payroll Made Simple</h1>
                <p className='w-[50%] text-[23px]'>Seamlessly manage payroll for your global workforce with our platform. From Tokyo to New York, ensure timely and accurate payments with the power of blockchain. No borders, no delays, just seamless payroll processing.</p>
            </div>
            <div className="bg-white mt-[30px] flex justify-center items-center">
                <img className="w-[80%]" src="/Images/fee.png" alt="" />
                <div className="absolute w-[30%] bg-white px-[17px] py-[20px] rounded-lg">
                    <p>Trust is the cornerstone of our blockchain payroll platform. With decentralized ledger technology, your payroll data is secure, tamper-proof, and transparent. Every transaction is recorded and verifiable, ensuring peace of mind for employers and employees alike.</p>
                </div>
               </div>
        </section>
        <section className='bg-[#EF0606] mx-[60px] pt-[80px] px-[90px] pb-[30px]'>
            <h1 className="font-bold text-white text-[25px]">BUILT FOR EVERY TYPE OF BUSINESS</h1>
            <div className="grid grid-cols-3 gap-4 mt-[70px]">
                <div>
                    <img className="w-[90%]" src="/Images/Top Agent Skills Needed to Sell Your Home in San Diego 1.png" alt="" />
                </div>
                <div className="">
                    <div  className="text-white">
                        <h2 className="font-bold text-[20px]">Small business</h2>
                        <p className="text-[14px]">As you start to grow your business, free up valuable time and let Tokupay handle small business payroll and tax filings for you.</p>
                    </div>
                    <div className="text-white mt-[20px]">
                        <h2 className="font-bold text-[20px]">Retail</h2>
                        <p className="text-[14px]">Save time by automatically tracking commission rates across your team from the tokupay, and pay employees with multiple pay rates.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default LandingPage