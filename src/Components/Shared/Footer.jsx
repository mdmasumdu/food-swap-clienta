

const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-300 text-base-content">
        <aside>
         <img className="w-24" src={"https://i.ibb.co/28V61Gv/Yellow-Minimalist-Round-Shaped-Cafe-Logo-removebg-preview.png"} alt="" />
          <p>Food Swap Limited<br/>Providing reliable services 1992</p>
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;