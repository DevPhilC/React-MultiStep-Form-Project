export default function RightImage({ stage }) {
  const IMG_URLS = [
    "https://assets.codepen.io/6060109/form-stage-1.png",
    "https://assets.codepen.io/6060109/form-stage-2.png",
    "https://assets.codepen.io/6060109/form-stage-3.png",
    "https://assets.codepen.io/6060109/form-stage-4.png"
  ];
  return (
    <div className="right-img">
      <img src={IMG_URLS[stage]}></img>
    </div>
  );
}
