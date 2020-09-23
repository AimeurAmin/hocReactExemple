import Axios from 'axios'
import React from 'react'
import '../../App.css'

const FetchDataHoc = (ComponentReceived, url) => {
    
    const NewComponent = props => {
        const [data, setData] = React.useState(null)
        React.useEffect( _ => {
            Axios
                .get(url)
                .then( res => {
                    setData(res.data)
                    console.log(res.data)
                })            
        }, [])

        if (!data) return (
            <div style={{textAlign: 'center' }} className='loading'>
                <img src='https://www.shiatsudeloire.com/imgs/loader.gif' />
            </div>)
            
        return <ComponentReceived {...props} data={data} />

    }

    return NewComponent
}

export default FetchDataHoc
