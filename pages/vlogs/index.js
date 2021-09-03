import { createClient } from "contentful";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import VlogCard from "../../src/components/vlogs/vlogCard";

const VlogsContainer = styled(Container)`
  padding-top: 150px;
`;

const SuperTitle = styled.div`
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: bold;
`;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      vlogs: res.items,
    },
  };
}
export default function Vlogs({ vlogs }) {
  console.log(vlogs);
  return (
    <VlogsContainer>
      <SuperTitle>
        <h4>My Recent blogs</h4>
      </SuperTitle>
      {vlogs.map((vl) => (
        <VlogCard key={vl.sys.id} vlog={vl}></VlogCard>
      ))}
    </VlogsContainer>
  );
}
