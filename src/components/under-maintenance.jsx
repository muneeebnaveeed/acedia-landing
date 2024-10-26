import Image from "next/image";

export const UnderMaintenance = () => {
  return (
    <div className="fixed w-screen h-screen flex justify-center items-center z-[10000]">
      <div className="w-full h-full p-20 backdrop-blur-lg flex flex-col gap-8 items-center justify-center">
        <Image
          width={960}
          height={540}
          src="/assets/images/maintenance-cropped.png"
          className="max-w-[624px] max-h-full object-contain"
        />
        <div className="text-[30px] font-extralight text-center">
          <p>Aw jeez, you caught us. Still setting things up.</p>
          <span>
            Contact us at{" "}
            <a
              href="mailto:contact@acediadevs.com"
              className="decoration-1 underline-offset-4 hover:underline"
            >
              contact@acediadevs.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
