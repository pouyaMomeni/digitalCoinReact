import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import '../style/list.css'
import CartContext from '../context'
import { Sparklines, SparklinesLine } from 'react-sparklines';
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
const List = () => {
    const { add } = useContext(CartContext);
    let [value, setValue] = useState(true)
    let [page, setPage] = useState(5)
    let [info, setInfo] = useState([]);
    useEffect(() => {
        axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${page}&page=1&sparkline=true`
        ).then(res => {
            setInfo(res.data)
        }).catch(error => console.log(error))
    }, [page]);
    const showMore = () => {
        if (value) {
            setPage(70)
            setValue(false)
        }
        else {
            setPage(5)
            setValue(true)
        }
    }
    const sendContext = (id) => {
        add(id);
    }
    return (
        <>
            <table className='table mt-5 ' id='list'>
                <thead>
                    <tr >
                        <th scope='col'>#</th>
                        <th scope="col">نام</th>
                        <th scope="col">اخرین قیمت</th>
                        <th scope="col">تعغیرات 24 ساعته</th>
                        <th scope="col">نمودار</th>
                        <th>  </th>
                        <th>   </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {info.map((value, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td><img className='wi' src={value.image} alt="s" /> {value.name}</td>
                                <td>{value.current_price} $</td>
                                <td >{value.price_change_24h}</td>
                                <td ><Sparklines data={value.sparkline_in_7d.price}  >
                                    <SparklinesLine color='blue' />
                                </Sparklines></td>
                                <td></td>
                                <td><button className='btn btn-dark text-light' onClick={() => sendContext(index)}>تبدیل</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='d-flex justify-content-center '>
                <button className='btn btn-dark justify-content-center mt-1 text-light' onClick={() => showMore()}>بیشتر/کمتر</button>
            </div>
        </>
    )
}
export default List