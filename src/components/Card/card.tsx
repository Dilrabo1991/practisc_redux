import { useAppSelector } from "../../app/hook";
import { selectPocemonList } from "../../app/selectors/home";
import useConnect from "../../modules/home/connect";

function Card() {
  const name = "Pakemon";
  const { data } = useConnect();
  console.log(data, "data ");
  return (
    <>
      <div
        style={{
          border: "1px solid red",
          padding: "10px",
          maxWidth: "150px",
          minWidth: "100px",
          width: "150px",
          height: "200px",
          borderRadius: "8px",
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt=" 404"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h5 style={{ textAlign: "center" }}>{name}</h5>
      </div>
    </>
  );
}

export default Card;
