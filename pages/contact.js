import Button from "../src/components/shared/TestButton";
import Images from "../src/components/shared/Images";
import img from "../public/Blog_Logo.jpg";

const Contact = () => {
  return (
    <>
      <Button color='orange'>This is button Test</Button>
      <Button color='black'>This is button Test</Button>
      <Images source={img} width={300} height={300}></Images>
    </>
  );
};

export default Contact;
