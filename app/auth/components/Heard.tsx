import Image from "next/image";

type HeardNode = {
  children: React.ReactNode;
};

function Heard({ children }: HeardNode) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image
        width="40"
        height="40"
        className="mx-auto h-10 w-auto"
        src="/logo/mark.svg"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {children}
      </h2>
    </div>
  );
}

export { Heard };
