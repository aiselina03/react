import React from 'react'
import Card from '../Card/Index'
import "./style.css"

const Cards = () => {
  return (
    <div className='cards'>
        <Card title="gunebaxan" img="https://images.pexels.com/photos/19017576/pexels-photo-19017576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Card title="papatya"  img="https://www.istanbulcicekleri.com/Upload/433161778papatyacicegianthemisnobilis.jpg"/>
        <Card title="qizilgul"  img="https://asangul.com/wa-data/public/shop/products/66/09/966/images/1583/1583.600.jpeg"/>
    </div>
  )
}

export default Cards