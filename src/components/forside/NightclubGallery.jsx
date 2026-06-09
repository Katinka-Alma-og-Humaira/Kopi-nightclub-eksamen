async function Gallery() {
  "use cache";
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`);
  const Gallery = await response.json();

  console.log(Gallery);

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl">NIGHT CLUB</p>
      <p>GALLERY</p>

      <div className="flex flex-col">
        {Gallery.map((item) => (
          <img key={item.id} src={`${process.env.NEXT_PUBLIC_API_URL}${item.asset.url}`} width={item.asset.width} height={item.asset.height} alt={item.asset.alt} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
