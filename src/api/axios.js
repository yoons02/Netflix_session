import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key:"0030d320257ea419cae477c7307a934a",
        language:"ko-KR",

    },
});export default instance;
