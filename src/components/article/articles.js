import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../../redux/articles/actionCreators";
import loadingGif from "assets/loading.gif"

export default function Articles(){
    const navigate = useNavigate();
    const data = useSelector((state) => (state.articles.data));
    const error = useSelector((state) => (state.articles.error));
    const loading = useSelector((state) => (state.articles.loading));
    const disptach = useDispatch();

    useEffect(() => {
        disptach(getArticles());
    },[disptach])

    if(loading){
        return (
            <img src={loadingGif} alt=""/>
        )
    }
    if(data.articles){
        return (<>
            {data.articles.map(element => (
                <div onClick={() => {
                    // navigate('/login');
                }}>
                    <div>{element.title}</div>
                </div>
                
                
            ))}</>
        )

    } 
}