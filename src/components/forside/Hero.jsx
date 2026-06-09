import Image from "next/image";

const Hero = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await response.json();

  const hero = events[0];
  const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}${hero.heroAsset.url}`;

  return (
    <div>
      <Image src={imageUrl} alt={hero.heroAsset.alt} width={300} height={300} />
    </div>
  );
};

export default Hero;
