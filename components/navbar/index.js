// import "@/styles/navbar.css";
import Image from 'next/image';

function NavBar() {
    return(
        <>
        <div className={'navbar'}>
            <Image width={30} height={30} src={'/images/Logo.png'} />
            <h1>LOGO</h1>
            <div style={{display:'flex',gap:15,alignItems:'center'}}>
            <Image width={20} height={20} src={'/images/Logo-1.png'} alt='icon' />
            <Image width={20} height={20} src={'/images/Logo-2.png'} alt='icon'  />
            <Image width={20} height={20} src={'/images/Logo-3.png'} alt='icon'  />
            <Image width={20} height={20} src={'/images/Logo-4.png'} alt='icon'  />
       
            

            </div>
        </div>
        <div style={{width:"100%",display:"flex",justifyContent:"center",gap:20}}>
            <a>SHOP</a>
            <a>SKILLS</a>
            <a>STORIES</a>
            <a>ABOUT</a>
            <a>CONTACT US</a>

        </div>
        <hr></hr>
        </>
    )
}

export default NavBar;