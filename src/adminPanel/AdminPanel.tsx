import React from "react";
import style from './AdminPanelCss.module.css'
import { StateType } from "../redux/StateReducers";
import { Items } from "./Items";

export type PropsType = {
    state: StateType
}


export const AdminPanel =(props: PropsType) => {
      return (
        <div className={style.container}>
            <ol>
            {props.state.map(item => {
            return (
               <li>
                <Items  id={item.id}
                        desc={item.desc}
                        title={item.title}
                        price={item.price}
                        stok={item.stok}
                        categories={item.categories}/>
               </li> 
                       
            )
           })}
            </ol>

           
        </div>
    )
}