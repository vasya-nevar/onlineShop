import React from "react";

export type ItemsType = {
        id: number,
        title: string,
        desc: string,
        price: number,
        categories: string,
        stok: number

} 

export type StateType = ItemsType[]

const initialState: StateType = [
 {id: 1, title: 'stol',desc: 'kojaniu stol', price: 123, categories: 'mebel', stok: 1},
 {id: 1, title: 'stol',desc: 'kojaniu stol', price: 123, categories: 'mebel',stok: 1},
 {id: 1, title: 'stol',desc: 'kojaniu stol', price: 123, categories: 'mebel',stok: 1},
 {id: 1, title: 'stol',desc: 'kojaniu stol', price: 123, categories: 'mebel',stok: 1},
]



export const StateReducers =(state:StateType = initialState, action: any): StateType => {
        switch(action.type) {
           
        }
        return state
}