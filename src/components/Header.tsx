import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { connect, useDispatch } from 'react-redux'
import { compose } from 'redux'
import s from './Header.module.css'
import { FaTrash } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const showOrders = (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()
    let summa = 0
    props.trash.map((el: any) => summa += Number.parseFloat(el.price))
    let click = (item: any) => {
        dispatch(props.deleteOrdersAC(item))
    }
    return (<div>
        {props.trash.map((el: any) => {
            return (
                <div key={el.id} className={s.accardionTrash_item}>
                    <img src={` ./img/${el.img}`} alt="404" />
                    <h2>{el.title}</h2>
                    <p>{el.desc}</p>
                    <b>${el.price}</b>
                    <FaTrash onClick={() => click(el)} className={s.deleteButton} />
                </div>)
        })}
        <p className={s.accardionTrash_summa}>Cумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
    )
}
const showNothing = () => {
    return (
        <h3>Товаров нет</h3>
    )
}
const HeaderContainer = (props: any) => {
    let [cardOpen, setCardOpen] = useState(false)
    return (
        <header className={s.header}>
            <div>
                <span className={s.header_logo}>House Staff</span>
                <ul className={s.header_nav}>
                    <NavLink to={'/'}>Главная</NavLink>
                    <NavLink to={'/hihas'}>Про нас</NavLink>
                    <NavLink to={'/kontakt'}>Контакты</NavLink>
                    <NavLink to={'/admin'}>Admin</NavLink>
                </ul>
                <FaShoppingCart
                    onClick={() => setCardOpen(!cardOpen)}
                    className={`${s.header_iconTrash}  ${cardOpen && s.active}`} />
                {cardOpen && (
                    <div className={s.accardionTrash}>
                        {props.trash.length === 0 ? showNothing() : showOrders(props)}
                    </div>
                )}
            </div>
        </header>
    )
}
let mapStateToProps = (state: any) => ({
})
let mapDispathToProps = {
}
export const Header = compose(
    connect(mapStateToProps, mapDispathToProps)
)(HeaderContainer)
