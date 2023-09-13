import axios from '../../axios/axios'
export const AuthLogin = async(valus)=>{
    try {
        const resData = await axios.post('/authlogin',valus)
        return resData
    } catch (error) {
        console.log(error)
    }
}