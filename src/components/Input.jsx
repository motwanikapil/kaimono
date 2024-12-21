export default function Input({
  type,
  placeholder,
  register,
  name,
  errors,
  autoComplete,
}) {
  return (
    <article>
      <input
        type={type}
        placeholder={placeholder}
        className="border-b-2 px-2 py-1.5 outline-none transition-all duration-300 focus:border-gray-500"
        {...register(name)}
        autoComplete={autoComplete}
      />
      {errors?.message && (
        <p className="mt-3 text-red-600">{`${errors.message.slice(0, 1).toUpperCase()}${errors.message.slice(1)}`}</p>
      )}
    </article>
  );
}