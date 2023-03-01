import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { getNewsAPI, getSourceAPI } from './api';

export const NewsContext = createContext();

const Context = ({children})=>{
    const [init, setInit] = useState(0);
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("general")
    const [index, setIndex] = useState(0);
    const [source, setSource] = useState();

    const fetchNews = async(reset = category) =>{
        const {data} = await axios.get(getNewsAPI(reset));
        setNews(data);
        if(init!=0){
            setIndex(1);
        }
        
    }

    const fetchNewsFromSources = async() =>{

        try{
            const {data} = await axios.get(getSourceAPI(source));
        setNews(data);
        setIndex(1);
        
        }catch(error){

        }
        
    }

    useEffect(() => {
        fetchNews()
        setInit(1)
    }, [category]);

    useEffect(() => {
        fetchNewsFromSources()
    }, [source]);

    return (
        <NewsContext.Provider value={{news,index, setIndex, fetchNews, setCategory, category, setSource}}>
            {children}
        </NewsContext.Provider>
    )
}

export default Context;

