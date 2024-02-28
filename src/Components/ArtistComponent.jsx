import { Link } from "react-router-dom"
import star from './star.png'
import { useState } from "react";

const ArtistComponent = ({data}) => {
    const [showAll, setShowAll] = useState(false);

    const displayedData = showAll ? data : data.slice(0, 4);
  return (
   <section className="container  mt-2">
    <div className="row">

  {displayedData.map((res, index) => (
      <div className="col-6 mt-3">
    <Link>
      <div key={index} className="px-2 py-2" style={{ background: "#ffffff", border: "1px solid #c0c0c0", borderRadius: "5px", display: "flex" }}>
      <div className="h-20 w-23" style={{ borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={res.url} style={{ objectFit: "cover", borderRadius: "5px", height: "80px", width: "95px" }} alt={`Image-${index}`} />
      </div>
      <div className="ml-4">
        <div style={{display: "flex" ,alignContent: "center", justifyContent:"space-between"}}>
        <h1 style={{ fontWeight: "700", fontSize: "20px" }}>{res.user.name}</h1>
            <div className="d-flex">

            <img className="mr-2" style={{height: "15px"}} src={star}  alt=""/>
            <img className="mr-2" src={star} style={{height: "15px"}} alt=""/>
            <img className="mr-2" src={star} style={{height: "15px"}} alt=""/>
            <img className="mr-2" src={star} style={{height: "15px"}} alt=""/>
            <img className="mr-2" src={star} style={{height: "15px"}} alt=""/>
            </div>
        </div>
        <p style={{ fontSize: "14px", lineHeight: "17px", color: "grey" }}>{res.paragraph}</p>
        <span className="text-xs" style={{ color: '#ec4c48' }}>Events: 300</span>
      </div>
    </div>
  </Link>
          </div>
  ))}
  </div>
  <div className="mt-4 w-100 text-end">

  {!showAll && data.length > 4 && (
        <button className="bg-danger text-white px-3 py-2 rounded-md text-base font-bold" onClick={() => setShowAll(true)}>
          See All
        </button>
  )}
  {showAll && data.length > 4 &&  (
        <button className="bg-danger text-white px-3 py-2 rounded-md text-base font-bold" onClick={() => setShowAll(false)}>
          See Less
        </button>
  )}
  </div>
</section>
  )
}

export default ArtistComponent