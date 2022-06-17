import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../../redux/articles/actionCreators";

export default function Articles(){
    const data = useSelector((state) => (state.articles.data));
    const loading = useSelector((state) => (state.articles.loading));
    const disptach = useDispatch();
    useEffect(() => {
        disptach(getArticles());
    },[])

    useEffect(() => {
    },[loading])
    return(
        <>
        {
            data.articles.map((item) => (
                <div>{item.title}</div>
            ))
        }
        
        </>
    )
}