import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const updateNews = async () => {
    props.setProgress(10)
    //https://newsapi.org/v2/top-headlines/sources?country=usapiKey=API_KEY

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=87e73d06851544688a8f188171224dd9&page=${page}&pageSize=${props.pageSize}`
    console.log(url)
    setloading(true)

    let data = await fetch(url)
    props.setProgress(30)

    let parsedData = await data.json()
    props.setProgress(70)

    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)

    console.log(parsedData)

    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${props.category}- NewsMonkey`

    updateNews()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const handlePreviousClick = async () => {
  //   setpage(page - 1)
  //   updateNews()
  // }

  // const handleNextClick = async () => {
  //   setpage(page + 1)
  //   updateNews()
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apikey=87e73d06851544688a8f188171224dd9&page=${
      page + 1
    }&pageSize=${props.pageSize}`
    setpage(page + 1)
    let data = await fetch(url)

    let parsedData = await data.json()

    console.log(parsedData)
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  }

  console.log('render')
  return (
    <div className="container  my-3">
      <h1
        className="text-center"
        style={{ margin: '40px 0px', marginTop: '90px' }}
      >
        NewsMonkey - Top Highlights from {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  categogory: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  categogory: PropTypes.string,
}

export default News
