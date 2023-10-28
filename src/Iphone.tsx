import iphone from "./assets/video1.gif";
import wallpaper from './assets/wallpaper.jpg';
import report from './assets/report.gif';

function Iphone() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img
        className="z-10 aspect-[9/19.5] bg-cover rounded-3xl border-black border-8 shadow-[0_0_0_5px_#6B7280] h-[50vh] w-auto"
        src={wallpaper}
        alt=""
      />
      <img
        className="z-10 aspect-[9/19.5] bg-cover rounded-3xl border-black border-8 shadow-[0_0_0_5px_#6B7280] h-[50vh] w-auto"
        src={iphone}
        alt=""
      />
      <img
        className="h-[61vh]"
        src={report}
        alt=""
      />
    </div>
  );
}

export default Iphone;
