import axios from "axios"

export const listClientServices = async () => {

    let tab = [];

    await axios.get('http://localhost:8000/api/client').then((data) => {
        tab = data;
    });
    return tab;

}