import React from 'react';

const NewsItems =(props)=> {
  
    let { title, description, urlImage, newsUrl, author, date, source} = props;

    return (
      <div className='my-3'>
        <div className="card">
           <div style={{
            display: 'flex',
            justifyContent: 'flex--end',
            position: 'absolute',
            left: '0'

           }}>
            
              
                <span className="visually-hidden">unread messages</span>
              <span className="badge rounded-pill bg-danger" >{source}
          </span>
              </div>
          <img src={!urlImage ? "https://static.toiimg.com/thumb/msid-97531106,width-1070,height-580,imgsize-3342,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : urlImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5
              className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">
              By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
