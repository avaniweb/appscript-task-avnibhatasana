import NavBar from "@/components/navbar";
import FilterPanel from "@/components/navbar/filterPanel";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import mainStyles from '../styles/Home.module.css';
import { CiHeart } from "react-icons/ci";

const inter = Inter({ subsets: ["latin"] });

const productData = [{
  image: '/images/product1.png', name: "Product Name ", isFav: false
}, {
  image: '/images/product2.png', name: "Product Name", isFav: true
}, {
  image: '/images/product3.png', name: "Product Name", isFav: false
}, {
  image: '/images/product4.png', name: "Product Name", isFav: false
}, {
  image: '/images/product5.png', name: "Product Name", isFav: false
},
{
  image: '/images/product2.png', name: "Product Name", isFav: false
},
{
  image: '/images/product6.png', name: "Product Name", isFav: false
},
{
  image: '/images/product7.png', name: "Product Name", isFav: false
},
{
  image: '/images/product8.png', name: "Product Name", isFav: false
},
{
  image: '/images/product9.png', name: "Product Name", isFav: false
},
{
  image: '/images/product10.png', name: "Product Name", isFav: false
},
{
  image: '/images/product1.png', name: "Product Name", isFav: false
},
{
  image: '/images/product5.png', name: "Product Name", isFav: false
},
{
  image: '/images/product4.png', name: "Product Name", isFav: false
},
{
  image: '/images/product10.png', name: "Product Name", isFav: false
},

]
export default function Home({ isMobile }) {
  const [isFilterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Appscrip Task Home Page</title>
        <meta name="description" content="Ecommerce Product List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainStyles.container}>
        <NavBar />
        <div style={{ width: '100%', padding: '10px 0px' }}>
          <h1 style={{ fontSize: 40, fontWeight: 600, margin: 0, textAlign: 'center' , marginTop:50 }}>DISCOVER OUR PRODUCTS</h1>
          <p style={{ fontSize: 14, margin: 0, marginTop: 5, textAlign: 'center', marginTop:20, marginBottom:50 }}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.<br /> Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
        {
          isMobile ?
            <div style={{ width: '100%', display: 'flex', padding: '10px 0px', justifyContent: 'space-between', alignItems: 'center', borderTop: "1px solid grey", borderBottom: "1px solid grey" }}>

              <div onClick={() => {
                setFilterOpen(!isFilterOpen)
              }} style={{ width: "50%", fontSize: 14, cursor: "pointer", borderRight: '1px solid grey', display: "flex", justifyContent: "center", alignItems: 'center', fontWeight: 600 }}>
                FILTER
              </div>
              <div style={{ width: "50%", fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: 'center', fontWeight: 600 }}>
                RECOMMANDED
              </div>
            </div>
            :
            <div style={{ width: '100%', display: 'flex', padding: '10px 0px', justifyContent: 'space-between', alignItems: 'center', borderTop: "1px solid grey", borderBottom: "1px solid grey" }}>
              <div style={{ width: '25%', display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                <p style={{ margin: 0 }}>{productData.length}</p>
                <p onClick={() => {
                  setFilterOpen(!isFilterOpen)
                }} style={{ margin: 0, cursor: "pointer", textDecoration: "underline" }}>{isFilterOpen ? 'Hide Filter' : 'Show Filter'}</p>

              </div>
              <div>
                <select>
                  <option>Recommended</option>
                  <option>Newest first</option>
                  <option>popular</option>
                  <option>Price : high to low</option>
                  <option>Price : low to high</option>

                </select>
              </div>
            </div>
        }

        <div style={{ width: "100%", display: 'flex', position: "relative", marginTop: 15 }}>

          <div style={{ width: isMobile ? "100%" : "25%", height: "100%", background: "#fff", position: isMobile ? "absolute" : "none", display: isFilterOpen ? "block" : "none" }}>
            <FilterPanel isMobile={isMobile} />
          </div>
          <div style={{ width: isMobile ? "100%" : isFilterOpen ? "75%" : "100%", display: "grid", gap: 20, padding: 5, gridTemplateColumns: isMobile ? "auto auto" : isFilterOpen ? "auto auto auto" : "auto auto auto auto" }}>
            {
              productData.map((product, index) => {
                return (
                  <div style={{ width: "100%" }}>

                    <img src={product.image} style={{ width: "100%", height: 250, objectFit: "cover" }} />
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '80%' }}>
                        <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>{product.name}</p>
                        <p style={{ margin: 0, fontSize: 10, fontWeight: 400, marginTop: 5, color: "grey" }}>Sign in or Create an account to see pricing</p>
                      </div>

                      <div style={{ width: '20%' }}>
                        <CiHeart style={{ float: 'left' , height:20, width:20 , marginTop:"5px" }} />
                      </div>
                    </div>

                  </div>
                )
              })
            }

          </div>

        </div>
      </div>
      <Footer />
    
    </>
  );
}
