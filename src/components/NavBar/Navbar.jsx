

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto'>
            <div className='sticky top-0 backdrop-blur-3xl backdrop-brightness-200 z-50 flex justify-between items-center pt-12 w-full'>
                <div>
                    <img src="https://i.ibb.co.com/2YJPjjs/logo.png" alt="" />
                </div>
                <div className='flex'>
                    <ul className='hidden md:flex mr-12 gap-12 items-center text-base font-normal text-gray-500'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <button className='btn font-bold'> Coin
                        <img src="https://i.ibb.co.com/dfLsKz4/coin.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;