

const Footer = () => {
    return (
        <div className=" bg-black mt-24">
          {/* footer section   */}
          <div className="flex justify-center">
          <img className="" src={'https://i.ibb.co.com/n7vWGk0/logo-footer.png'} alt="" />  
          </div>
            <footer className="gap-8 footer p-10">
{/* <footer className="gap-8 footer p-10"> */}



  <nav className="ml-8">
    <h6 className=" text-white font-bold">About Us</h6>
   <p className="text-gray-400"> We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
  </nav>

  <nav className="text-gray-400">
    <h6 className=" text-white font-bold">Quick Links</h6>
   <li><a className="link link-hover">Home</a></li>
   <li><a className="link link-hover">Service</a></li>
   <li><a className="link link-hover">About</a></li>
    <li><a className="link link-hover">Contact</a></li>
  </nav>
  <form>
    <h6 className=" text-white font-bold">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-gray-400">Subscribe to our newsletter for the <br /> latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn bg-gradient-to-r from-yellow-500 to-pink-500 join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
 </div>
  
  
    );
};

export default Footer;