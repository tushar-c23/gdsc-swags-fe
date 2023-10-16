import axios from 'axios';

export const actions = {
    default: async({request}) => {
        const data = await request.formData(); 
        const res = await axios.post("http://localhost:3000/tshirt", {
            email: data.get("email"),
            size: data.get("size")
        });
        console.log(res.status);
        if(res.status == 202) {
            return "Updated!";
        }
    }
}