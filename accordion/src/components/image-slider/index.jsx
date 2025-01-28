import { useEffect, useState } from "react";

import "./styles.css";



export default function ImageSlider({
  url = "https://picsum.photos/v2/list",
  limit = 5,
  page = 1,
}) {

const [activeImgIndex,setActiveImgIndex] = useState(2);
const [imgDataArr, setImgDataArr] = useState([]);

  console.log(`${url}?page=${page}&limit=${limit}`);

  useEffect(()=>{
    let isCanceld = false;
    fetch(`${url}?page=${page}&limit=${limit}`)
    .then(res=>res.json())
    .then(data=>{
      if(!isCanceld){
      setImgDataArr(data)
      console.log(imgDataArr)
    }
    });
    return ()=>{
      isCanceld = true;
    }
  },[]);

  function handleIndicatorClick(getImgIndex){
    setActiveImgIndex(getImgIndex);
  }

  function handleArrowClick(direction){
    let nextImgIndex = activeImgIndex;
    if(direction === 'left'){
      nextImgIndex--;
      nextImgIndex = nextImgIndex <0 ? imgDataArr.length-1: nextImgIndex;
    } else {
      nextImgIndex++;
      nextImgIndex = nextImgIndex >=imgDataArr.length ? 0 : nextImgIndex;
    }
    setActiveImgIndex(nextImgIndex);
  }

  const imgList = imgDataArr.map((imgData,index)=>
    { const cssClass = index !== activeImgIndex? "img-container img-deactiveated" : "img-container";
    return <img className={cssClass} alt={imgData.author} src={imgData.download_url} key={imgData.id}/>})

  const indicatorList = imgDataArr.map((imgData,index)=>{
    const cssClass = index !== activeImgIndex? "indicator-circle" : "indicator-circle indicator-active";
    return (
      <div className={cssClass} key={imgData.id} onClick={()=>handleIndicatorClick(index)}></div>
    )
  })

  return (
    <div className="container">
      <div className="arrow arrow-left" onClick={()=>handleArrowClick("left")}></div>
      <div className="arrow arrow-right" onClick={()=>handleArrowClick("right")}></div>
          {imgList}
      <div className="indicator-circles">
        {indicatorList}
      </div>
      {/*imgDataArr1*/}
    </div>
  );
}
