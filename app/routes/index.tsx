export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Remix + Vercel Image Optimization Example</h1>
      <h2>From my trip to Rio!</h2>
      <div>
        <img
          src="/_vercel/image?url=%2Fimages%2Frio.jpeg&w=1000&q=75"
          width="500"
          height="375"
          alt="Rio"
        />
      </div>
      <p>
        This image was uploaded to Vercel as a 3.9mb unoptimized image, but when
        served via Image Optimization it is resized and served with the optimal
        image format for your web browser, making it ~120kb.
      </p>
    </div>
  );
}
