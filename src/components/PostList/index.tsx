import { Container, Textarea, TextareaContainer } from "./styles";
import { MouseEvent, useContext, useState } from "react";

import Button from "../Button";
import { Request } from "../../backup/post";
import { AuthContext } from "../../contexts/AuthContext";

const PostList = () => {
  const [post, setPost] = useState("");
  const { setPosts } = useContext(AuthContext);
  const userLogadoId = localStorage.getItem("@portfy(id)");
  const token = localStorage.getItem("@portfy(token)");

  const createPost = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    if (post) {
      const data = { content: post, userId: userLogadoId };

      Request.post("/posts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          Request.get("/posts").then((res) => setPosts(res.data));
        })
        .catch((erro) => console.log(erro));
    }
  };

  return (
    <Container>
      <TextareaContainer>
        <Textarea
          cols={10}
          onChange={(event) => setPost(event.target.value)}
          name="post-writer"
          placeholder="Descreva a vaga que você está anunciando"
        />
        <Button
          buttonStyle="primary"
          bg="var(--ligth-blue)"
          color="var(--white)"
          disColor="var(--disabled-blue)"
          hover="var(--medium-blue)"
          type="submit"
          onClick={(event) => createPost(event)}
        >
          Publicar
        </Button>
      </TextareaContainer>
    </Container>
  );
};

export default PostList;
