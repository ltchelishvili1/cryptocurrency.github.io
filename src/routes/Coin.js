import axios from 'axios'
import { useParams } from 'react-router-dom'
import React,{useEffect,useState} from 'react'
import './Coin.css'
import DOMpurify from  'dompurify'

const Coin = () => {
  const params = useParams()
  const [coin , setCoin] = useState({})
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect( () =>{
    axios.get(url).then((res)=>{
      setCoin(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    
    <div>
      <div className='coin-container'>  
        <div className='content headerr'>
          <div className='titleimage'>
          <h1>{coin.name}</h1>
          {coin.image ? <img src={coin.image.small}  alt={coin.name}/>  : null}
          </div>
          <div className='titlerank'> 
          { coin.market_cap_rank ? <h2>#{coin.market_cap_rank}</h2> : null }
          </div>
        </div>
        <div className='content'> 
        <tbody className='tabble'>
           <tr className='timee'>
             <td>
             &nbsp; 1H {coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}% </p> : null }
             </td>
             <td>
             &nbsp; 24H
               {coin.market_data?.price_change_percentage_24h_in_currency ?<p>{ coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}% </p> : null}
             </td>
             <td>
             &nbsp; 7D {coin.market_data?.price_change_percentage_7d_in_currency ? <p>{ coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}
             </td>
             <td>
             &nbsp;14D {coin.market_data?.price_change_percentage_14d_in_currency ? <p>{ coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}
             </td>
             <td>
             &nbsp; 30D {coin.market_data?.price_change_percentage_30d_in_currency ?<p>{ coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}% </p> : null} 
             </td>
             <td>
             &nbsp; 1Y {coin.market_data?.price_change_percentage_1y_in_currency ?<p>{ coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}% </p> : null}
             </td>
           </tr>
        </tbody>
       
        </div>
        <div className='content'>
        <div className='about'>
          <h3>about</h3>
          <p dangerouslySetInnerHTML={{
            __html: DOMpurify.sanitize(coin.description ? coin.description.en : "")
          }}>

          </p>
        </div>
      </div>
        </div>
        
    </div>
  )
}

export default Coin


