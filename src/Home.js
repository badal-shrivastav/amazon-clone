import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB657651956_.jpg"
            alt=""
            />
            <div className="home_row">

                <Product
                    id="12321341"
                    title="Redmi Note 8 (Space Black, 4GB RAM, 64GB Storage)"
                    price={11000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61wXFmyMLQL._SL1500_.jpg"  
                />
                <Product
                    id="12321342"
                    title="Onida 80 cm (32 Inches) Fire TV Edition HD (Black)"
                    price={14149}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71rMcMwRuZL._SL1500_.jpg"  
                />
                <Product
                    id="12321343"
                    title="Data Structures | Schaum's Outline Series"
                    price={484}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51gOcNM4yDL._SX366_BO1,204,203,200_.jpg"  
                />
            </div>


            <div className="home_row">

                <Product
                    id="12321351"
                    title="boAt Bassheads Earphones with Mic(Black)"
                    price={379}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/719elVA3FvL._SL1500_.jpg"  
                />
                <Product
                    id="12321352"
                    title="boAt Airdopes , (Active Black)"
                    price={2499}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61-1B-m03bL._SL1500_.jpg"  
                />
                <Product
                    id="12321353"
                    title="boAt Stone 170 5W Bluetooth Speaker"
                    price={1299}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71C7FzVl49L._SL1500_.jpg"  
                />
                <Product
                    id="12321354"
                    title="Mi Outdoor Bluetooth Speaker (5W) "
                    price={1599}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81N2x2qSmfL._SL1500_.jpg"  
                />
            </div>

        </div>
    )
}

export default Home

