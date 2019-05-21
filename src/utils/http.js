import axios from 'axios';

const http = ( {url, method , params, headers} ) => {
   return new Promise((resolve, rej) => {
        axios({
            url,
            method,
            params,
            headers
        })
            .then( res => resolve(res) )
            .catch( err => {
                throw err
            } )
    })
}

export default http
