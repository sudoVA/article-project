import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticle } from "../../redux/article/actionCreators";

export default function Article() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.article.loading);
  const article = useSelector((state) => state.article.article);
  const { slug } = useParams();
  useEffect(() => {
    dispatch(getArticle(slug));
  }, []);

  return loading ? <>loading</> : <div>{article.title}</div>;
}
