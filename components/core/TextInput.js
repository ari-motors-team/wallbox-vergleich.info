import { useRouter } from "next/router";

export default function TextInput({
  register,
  label,
  id,
  type,
  placeholder,
  style,
  pattern,
  registerData,
  extraStyle,
  required,
}) {
  const fullNameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);
  const router = useRouter();
  return router.pathname == "/" ? (
    <div className="relative mt-6 text-lg rounded-sm lg:pl-2 w-52 sm:w-full">
      <label
        htmlFor={id}
        className={`${extraStyle} relative sm:bottom-6 lg:bottom-8 md:bottom-11 bottom-11 font-bold sm:py-2 text-blue-lighter pl-1`}
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        className={`${style} placeholder:text-xs xs:placeholder:text-md md:placeholder:text-lg relative sm:bottom-7 lg:bottom-8 h-14 md:bottom-11 bottom-11 w-52 sm:w-full bg-white focus:outline-none focus:ring focus:border-blue-darker focus:shadow-outline border border-gray-300 rounded-lg xs:rounded-r-none lg:rounded-l-lg py-2 px-4 block"
        }`}
        content-type={type}
        placeholder={placeholder}
        {...register(registerData, {
          required: required,
          pattern: pattern,
        })}
      />
    </div>
  ) : (
    /* --------------------------------------------------------------   kontakt  */
    <div
      className={
        router.pathname == "/kontakt"
          ? "flex flex-col py-2"
          : "flex flex-col py-1 px-1"
      }
    >
      <label
        htmlFor={id}
        className={`${extraStyle} font-bold sm:py-2 text-blue-lighter`}
      >
        {label}
      </label>
      <input
        className={`${style}  bg-grey-lighter focus:outline-none focus:ring focus:border-blue-darker focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block flex-grow"
        }`}
        content-type={type}
        placeholder={placeholder}
        {...register(registerData, {
          required: required,
          pattern: pattern,
        })}
      />
    </div>
  );
}
