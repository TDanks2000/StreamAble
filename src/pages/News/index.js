import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsPost from "../../components/NewsPost";
import * as api from "../../utils/api/api";
import { Container, Title, Wrapper } from "./News.styles";

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setLoading(true);
    api.getAnnTopic(topic).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [topic]);

  if (loading) return "loading...";

  return (
    <Container>
      <Title>News {!!topic && <span> - {topic}</span>}</Title>
      <Wrapper>
        {data.map((item) => (
          <NewsPost {...item} key={`News-post-Page-${item.id}`} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default News;
