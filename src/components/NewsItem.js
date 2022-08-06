import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageurl, newsUrl, author, date, source } = props
  return (
    <div className="my-4">
      <div className="card">
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
          style={{ left: '81%', top: '-2%', zIndex: '1' }}
        >
          {source}
        </span>
        <img
          src={
            !imageurl
              ? 'https://www.gannett-cdn.com/presto/2022/07/22/PROC/7b16ead0-a527-4e4e-81c9-3fd359b5f6d2-RPD.jpg?crop=1919,1079,x0,y128&width=1919&height=1079&format=pjpg&auto=webp'
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p className="card-text">{description}...</p>
          {/* <a href="#" className="card-link">
              Card link
            </a> */}
          <p className="card-text">
            <small className="text-muted">
              By {!author ? 'unknown' : author} on{' '}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
