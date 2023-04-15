import React from 'react'
import {combineReducers} from 'redux'
import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import { StateReducers } from './StateReducers'

export const rootState = combineReducers({
   
    state: StateReducers
})



export type rootStateType = ReturnType<typeof rootState>
export const Store = createStore(rootState)