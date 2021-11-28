import { FETCH_DATA } from "./types";
import axios from 'axios'

export const fetchData = () => dispatch => {
    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json').then((res) => {
        dispatch({
            type: FETCH_DATA,
            payload: res.data
        })
    }).catch((e) => {
        console.log(e)
    })
}
