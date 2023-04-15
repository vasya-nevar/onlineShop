import React from "react";
import style from './AdminPanelCss.module.css'
import { ItemsType } from "../redux/StateReducers";
import { useState } from "react";


type Props = ItemsType



export const Items =(props: Props) => {
    let [flag, setFlag] = useState<boolean>(false)
      return (
        <div className={style.items}>
            <div>
              {flag? <input value={props.desc} autoFocus={true} onBlur={() => {setFlag(false)}}/>: <span onClick={() => {setFlag(true)}}> {props.desc}</span>}
            </div>
            <div>
               {props.price} 
            </div>
            <div>
               {props.title} 
            </div>
            <div>
               {props.stok} 
            </div>
            <div>
               {props.categories} 
            </div>
        </div>
    )
}