import React, { useState } from 'react'
import News from './News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'

const Force = () => {
  const [progress, setprogress] = useState(0)
  return (
    <div>
      <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setprogress}
                key={'general'}
                pageSize={7}
                country="in"
                category="general"
              />
            }
          />

          <Route
            exact
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
            exact
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
          <Route
            exact
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
          />
          <Route
            exact
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
            exact
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
            exact
            path="/sports"
            element={
              <News
                setProgress={setprogress}
                key={'sports'}
                pageSize={7}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setprogress}
                key={'technology'}
                _
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

export default Force