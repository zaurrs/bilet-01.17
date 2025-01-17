import React from 'react'
import "./Banner.scss"
const Banner = () => {
  return (
    <div>
      
      <div className="banner">
        <h1>Shop by Category</h1>
        <div className="cards">
            <div className="row cardlarr">
               
                <div className="col-md-4 col-sm-12">
                    <div className="row cards">
                        {/* <div className="col-md-6 ">
                            <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp" alt="" />
                        </div> */}
                        <div className="col-md-6 textContent">
                            <h3>Owmen`s</h3>
                            <button>Best Detals</button>
                            <div>New Collection</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="row cards">
                        {/* <div className="col-md-6 ">
                            <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp" alt="" />
                        </div> */}
                        <div className="col-md-6 textContent">
                            <h3>Owmen`s</h3>
                            <button>Best Detals</button>
                            <div>New Collection</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="row cards">
                        {/* <div className="col-md-6 ">
                            <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp" alt="" />
                        </div> */}
                        <div className="col-md-6 textContent">
                            <h3>Owmen`s</h3>
                            <button>Best Detals</button>
                            <div>New Collection</div>
                        </div>
                    </div>
                </div>
            
            
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
