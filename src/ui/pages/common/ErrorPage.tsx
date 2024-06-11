import WaveDecorative from "@svg/wave-decorative.svg?react";
import Decoration from "@svg/decoration.svg?react";

const ErrorPage = ({ error }: any) => {
  console.error(error.message);
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
      <div className="absolute translate-x-[140%] translate-y-3/4">
        <p className="text-60px400">
          <span className="text-60px700">500</span> Error
        </p>
        <p className="text-20px400 text-gray-700 pt-2">
        Server Error
        </p>
      </div>
       <div>
       <Decoration />
       </div>
    </div>
  );
};
export default ErrorPage;
