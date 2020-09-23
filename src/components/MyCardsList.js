import { Grid } from '@material-ui/core'
import React from 'react'
import MyCard from './MyCard'


const MyCardsList = ({data}) => {
    return (
        <Grid container spacing={10} alignItems="center" justify="center" style={{margin: 'auto', width: '90vw'}}>
            {data.articles.map( (_, key) => (
                <Grid item xs={12} md={4} key={key} >
                    <MyCard 
                        data={_}    
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default MyCardsList
