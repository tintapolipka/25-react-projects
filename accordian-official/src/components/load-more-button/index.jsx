import {useState, useEffect} from "react";
import  "./styles.css";

export default function LoadMoreresult(){
    const [loading, setLoading] = useState(false); // indicator of loading
    
    const [products, setProducts] = useState([]); // the array of products objects
    const [count, setCount] = useState(0); // pages count
    const [disableBtn, setDisableBtn] = useState(false);

    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
             count === 0? 0: count*20 
            }`
            );
            const result = await response.json();
            
            console.log(result);
            if(result && result.products && result.products.length){
                
                setProducts(prevData=>[...prevData,...result.products]);
                setLoading(false)
                console.log('products',products);
            }
            
        } catch(e){
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[count])

    useEffect(()=>{
        if(products && products.length === 100){
            setDisableBtn(true);
        }
    },[products])

    if(loading){
        return (<div> Loading Data ! Please wait...</div>)
    }

    return (
    <div className="load-more-container">
        <div className="button-container">
            <button onClick={()=>setCount(count+1)} disabled={disableBtn}>
              Load More Products  
            </button>
            {disableBtn && <p>You have reached 100 products!</p>}
        </div>
        <div className="product-container">
        {
            products && products.length ?
            products.map(item=>{
                return <div className="product"
                key={item.id+ Math.random()}>
                    <img 
                    src={item.thumbnail}
                    alt={item.title}
                    />
                    <p>{item.title}</p>
                </div>
            })
            :null
        }
        </div>
        
        </div>
    )
}