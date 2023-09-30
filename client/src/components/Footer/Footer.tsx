import "./Footer.style.scss";



function Footer() {
  const css1= `.footer{padding: 25px 50px 75px; text-align: center;}`;
  
 
  return <div className="footer" >
    <style>{css1}</style>
    © 2023 Carleton University
  </div>;
}

export default Footer;
