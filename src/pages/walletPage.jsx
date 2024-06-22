import Navbar from '../components/nav.jsx'
function WalletConnect () {
    return (
        <>
            <Navbar />
            <div className='pt-[120px] pb-[90px] flex juustify-center items-center flex-col'>
                <a className="" href="/"><img className="w-[73%]" src="/Images/Component 1.png" alt="" /></a>
                <p className='w-[35%] mb-[30px] text-[20px]'>Build trust with your team through transparent and stable payroll transactions. Using Japan stablecoin, you can provide your employees with a dependable payment method that reflects modern financial innovation.</p>
                <a href=""><button  className="flex px-[50px] py-[16px] bg-[#EF0606] text-white border rounded-lg text-[13px] font-medium shadow-sm text-black sm:hidden md:hidden lg:flex" type="button">Connect Wallet</button></a>
            </div>
            </>
    )
}
export default WalletConnect