import WaveDecorative from "@svg/wave-decorative.svg?react";
import Decoration from "@svg/decoration.svg?react";

const NotFound = () => {
  return (
    <div
      className="h-screen flex items-center justify-between"
      style={{
        background: "linear-gradient(116deg, #FFF -13.49%, #7EC7FF 109.71%)",
      }}
    >
      <div>
        <WaveDecorative />
      </div>
      <div className="absolute top-[56%] left-[350px]">
        <p className="text-60px400">
          <span className="text-60px700">404</span> error
        </p>
        <p className="text-20px400 text-gray-700 pt-2">Not Found Result</p>
      </div>
      <div>
        <Decoration />
      </div>
    </div>
  );
};
export default NotFound;
