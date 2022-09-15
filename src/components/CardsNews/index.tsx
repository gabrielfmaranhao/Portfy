import axios from "axios";
import { useEffect, useState } from "react";
import { INews } from "../../interfaces/components";
import { Card, Container } from "./style";

export const CardsNews = () => {
  const [news, setnews] = useState<INews[]>([]);
  
  useEffect(() => {
    async function dados() {
      await axios
        .get("http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10")
        .then((response) => setnews(response.data.items))
        .catch((error) => console.log(error));
    }
    dados();
  }, []);

  return (
    <Container>
      <h2>Últimas notícias</h2>
      <ul>
        {news?.map((element) => (
          <Card key={element.id}>
            <a href={element.link} target= "_blank" >{element.titulo}</a>
            <p>{element.introducao}</p>
          </Card>
        ))}
      </ul>
    </Container>
  );
};
