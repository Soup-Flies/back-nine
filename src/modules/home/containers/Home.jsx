import React from 'react'

import BottleDisplay from '../components/BottleDisplay.jsx';

import VodkaBottle from '../../../assets/f9_bottle.png'
import BourbonBottle from '../../../assets/b9_bottle.png'

import '../style/home.css'


class Home extends React.Component {

    vodka = {
        title: 'Front Nine Vodka',
        img: VodkaBottle,
        body: `Masterfully crafted from a passion for Golf and a thirst for Life, we at Back Nine enjoy the comradery of Family and Friends, on and off the course. No matter your pursuits, we hope that you will enjoy Front Nine Vodka with us."Do it, Roy."`
    }

    bourbon = {
        title: 'Back Nine Bourbon',
        img: BourbonBottle,
        body: `Artfully crafted from a passion for Golf and a thirst for Life, we at Back Nine enjoy the comradery of Family and Friends, on and off the course. We hope during all your pursuits you will enjoy Back Nine Bourbon with us. "Be Humble."`
    }

    render() {

        return (
        <div style={{ background: '#000' }}>
            <BottleDisplay {...this.vodka} />
            <BottleDisplay {...this.bourbon} />
        </div>
        )
    }
}


export default Home;
