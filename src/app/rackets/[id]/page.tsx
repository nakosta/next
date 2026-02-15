import { rackets } from "@/data/rackets";

const RacketPage = ({ params }: { params: { id: string } }) => {
  const racket = rackets.find((item) => item.id === Number(params.id));

  if (!racket) {
    return <div>Ракетка не найдена</div>;
  }

  return (
    <div>
      <h1>{racket.name}</h1>
      <img src={racket.imageUrl} alt={racket.name} width={300} />
      <p>{racket.description}</p>
      <p>Цена: ${racket.price}</p>
    </div>
  );
};

export default RacketPage;
