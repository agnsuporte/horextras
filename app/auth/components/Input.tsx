import { ChangeEventHandler } from "react";
import { string } from "zod";

type InputProps = {
  id: string;
  name: string;
  type: string;
  ariadescribedby?: string;
  onChange?: ChangeEventHandler;
};

function Input({ id, name, type, ariadescribedby, onChange }: InputProps) {
  return (
    <div className="mt-2">
      <input
        id={id}
        name={name}
        type={type}
        aria-describedby={ariadescribedby}
        required
        onChange={onChange}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}

export { Input };
