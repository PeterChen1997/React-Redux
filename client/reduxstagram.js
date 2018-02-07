import React from 'react'
import { render } from 'react-dom'

import css from './styles/style.styl'

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

import Raven from 'raven-js'
import { sentry_url } from './data/config'

Raven.config(sentry_url).install()

const repo = '/ReduxApp'
const viewPath = '/ReduxApp/ReduxApp/view/:postId'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path={repo} component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path={viewPath} component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))
