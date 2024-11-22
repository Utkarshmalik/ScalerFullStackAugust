import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Tranquil Forest Path',
    description: 'A serene pathway surrounded by lush greenery, perfect for nature walks and meditation.',
    category: 'Nature',
    price: 49.99,
    rating: 4.8,
    tags: ['forest', 'nature', 'relaxation'],
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Cozy Mountain Cabin',
    description: 'A warm and inviting cabin nestled in the mountains, ideal for a peaceful getaway.',
    category: 'Travel',
    price: 149.99,
    rating: 4.7,
    tags: ['mountain', 'cabin', 'cozy'],
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Vintage Camera Kit',
    description: 'A collection of retro cameras for photography enthusiasts and collectors.',
    category: 'Photography',
    price: 299.99,
    rating: 4.9,
    tags: ['vintage', 'camera', 'photography'],
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/17041225/pexels-photo-17041225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Modern Workspace Setup',
    description: 'A minimalist desk setup for boosting productivity and maintaining a sleek aesthetic.',
    category: 'Office',
    price: 199.99,
    rating: 4.6,
    tags: ['workspace', 'office', 'minimalist'],
  },
  {
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/11664378/pexels-photo-11664378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Sunset Over the Ocean',
    description: 'A breathtaking view of the sun setting over the horizon, captured in vivid colors.',
    category: 'Nature',
    price: 39.99,
    rating: 4.9,
    tags: ['sunset', 'ocean', 'nature'],
  }
];




function Carousel(){


    const [currentItemIndex, setCurrentItemIndex] = useState(0);


    useEffect(()=>{
        const timer = setInterval(()=>{
            nextItem();
        },2000)

        return ()=>clearInterval(timer);
    },[currentItemIndex]);


    function nextItem(){
        if(currentItemIndex==items.length-1){
            setCurrentItemIndex(0);
        }else{
            setCurrentItemIndex((curr)=>curr+1);
        }
    }


    function prevItem(){
        if(currentItemIndex==0){
            setCurrentItemIndex(items.length-1);
        }else{
            setCurrentItemIndex((curr)=>curr-1);
        }
    }



    return <div>

        <button onClick={prevItem} > Prev </button>

        <div>
            <img height={200} width={200} src={items[currentItemIndex].imageUrl} />
        </div>

        <h2> {items[currentItemIndex].title} </h2>

        <p> {items[currentItemIndex].description} </p>

        <button onClick={nextItem}> Next </button>



    </div>

}

export default Carousel;