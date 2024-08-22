import Error from "@/components/error";
import Wrapper from "@/layouts/Wrapper"; 
 
export const metadata = {
  title: "Vitor Martins::Not Found",
};

const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;