import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setprogress] = useState(0)
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setprogress}
                key={'home'}
                pageSize={7}
                country="in"
                category="home"
              />
            }
          />

          <Route
            path="/business"
            element={
              <News
                setProgress={setprogress}
                key={'business'}
                pageSize={7}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setprogress}
                key={'entertainment'}
                pageSize={7}
                country="in"
                category="entertainment"
              />
            }
          />
          {/* <Route
             
            path="/general"
            element={
              <News
                setProgress={setprogress}
                key={'general'}
                pageSize={7}
                country="in"
                category="general"
              />
            }
          /> */}
          <Route
            path="/health"
            element={
              <News
                setProgress={setprogress}
                key={'health'}
                pageSize={7}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setprogress}
                key={'science'}
                pageSize={7}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setprogress}
                key={"sports"}
                pageSize={7}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setprogress}
                key={'technology'}
                pageSize={7}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
