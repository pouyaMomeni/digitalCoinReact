import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import '../style/box.css'
import * as bsIcons from "react-icons/bs";
import Select from 'react-select';
import CartContext from '../context';


const Box = () => {
    const { value } = useContext(CartContext)
    let [info, setInfo] = useState([]);
    let [option, setOption] = useState([])
    useEffect(() => {
        axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=60&page=1&sparkline=true`
        ).then(res => {
            setInfo(res.data)
        }).catch(error => console.log(error))
        optionData()
    });

    const optionData = () => {
        let x = [];
        for (let i = 0; i < 60; i++) {
            let b = { value: info[i]?.id, label: <div><img src={info[i]?.image} height="30px" width="30px" alt='ss' />{info[i]?.name} </div> }
            x[i] = b
        }
        setOption(x)
    }
    return (
        // <div className="d-flex justify-content-around border border-1 p-3 m-3 box-color box-size " id='box'>
        //     <select className="form-select form-select size-box ">
        //         <option defaultValue='select'>{value}</option>
        //     </select>
        //     <button className='btn btn-light' onClick={() => { convert() }}><bsIcons.BsCurrencyExchange /></button>
        //     <select className="form-select form-select size-box">
        //         {info.map((value, index) => {
        //             return (
        //                 <option value={index} key={index}>{value.name}</option>
        //             )
        //         })}
        //     </select>

        // </div>
        <section className=' m-5 border border-2 p-3' id='box'>
            <div className="d-flex justify-content-center mb-3">
                <h3>تبدیل راحت ارز دیجیتالی</h3>
            </div>

            <div className='d-flex justify-content-around '>
                <Select
                    value={{ value: info[value]?.id, label: <div><img src={info[value]?.image} height="30px" width="30px" alt='Selecting' />{info[value]?.name} </div> }}
                    className='w-25'
                    options={option}
                    placeholder={value}
                />
                <button className='btn btn-dark'><bsIcons.BsCurrencyExchange /></button>
                <Select
                    className='w-25'
                    options={option}
                />
            </div>
        </section>

    )
}
export default Box