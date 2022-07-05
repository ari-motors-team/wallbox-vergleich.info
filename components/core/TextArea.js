import { useRouter } from "next/router";

export default function TextArea({
  register,
  label,
  id,
  type,
  placeholder,
  style,
  pattern,
  registerData,
  width,
  required,
  carItem,
}) {
  const router = useRouter();
  router.pathname == "/kontakt" ? (required = true) : (required = false);
  return (
    <div
      className={
        router.pathname == "/kontakt"
          ? "text-left mb-4 flex flex-col flex-grow"
          : "hidden"
      }
    >
      <label htmlFor={id} className="py-2 font-bold text-blue-lighter">
        {label}
      </label>
      <textarea
        className={`${style} bg-grey-lighter focus:outline-none focus:ring focus:border-blue-darker focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block ${
          width ? `${width}` : "flex-grow"
        }`}
        htmlFor={id}
        rows={4}
        {...register(registerData, {
          required: required,
        })}
        defaultValue={carItem ? carItem : null}
        type={type}
        id={id}
      ></textarea>
    </div>
  );
}
