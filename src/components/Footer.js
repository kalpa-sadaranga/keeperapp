import "../style.css"; 



 function Footer(){
    const currentYear=new Date().getFullYear();
    console.log(currentYear);
    return(<footer>
    <p className="footer p"> Copyright © {currentYear}</p>
    </footer>
    );
 }


 export default Footer;