import axios from 'axios';
const url = process.env.URL_BE;
console.log(`${url}/tshirt`);

export const actions = {
    default: async({request}) => {
        const data = await request.formData(); 
        const res = await axios.post(`${url}/tshirt`, {
            email: data.get("email"),
            size: data.get("size")
        });
        console.log(res.status);
        if(res.status == 202) {
            return "Updated!";
        }
    }
}