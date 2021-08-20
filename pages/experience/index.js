import { experience } from "../../src/data/experience";

const Experience = (exp) => {
  console.log(exp);
  return (
    <div>
      <ul>
        {exp.exp.map((ex) => (
          <li key={ex.id}>{ex.id}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const exp = experience;
  return {
    props: {
      exp,
    },
  };
}

export default Experience;
