import { ChangeEvent, useState } from "react";
import { TInput } from "./TInput";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useUpdateEffect } from "@/app/hooks/useUpdateEffect";
import { twMerge } from "tailwind-merge";

const Input = ({
  title,
  label,
  leading,
  trailing,
  name,
  register,
  error,
  type,
  isDebounce = false,
  placeholder,
  className,
  onChange,
  onDebounce,
  ...props
}: TInput) => {
  // const [value, setValue] = useState(defaultValue || "")
  const [innerValue, setInnerValue] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const debouncedValue = useDebounce<string>(innerValue!, 500);

  useUpdateEffect(() => {
    dirty && isDebounce && onDebounce?.(innerValue!);
  }, [debouncedValue]);

  return (
    <div className="w-full">
      <h4 className="text-[#FF56A5] pb-2 pt-2">{title}</h4>
      <div
        className={twMerge(
          `relative flex items-center gap-x-4 px-4 border h-14 border-solid rounded-lg ${
            props?.disabled ? "bg-gray-100" : "bg-white"
          } ${Boolean(error) ? "border-error-500" : "border-softBlack"}`,
          className
        )}
      >
        {leading}
        <div className="relative h-full flex-grow">
          <input
            aria-label={name}
            id={name}
            type={type}
            {...props}
            {...register?.(name)}
            // value={value}
            placeholder={label ? " " : placeholder}
            className={[
              "w-full h-full peer text-15px400",
              label ? "pt-3" : "",
            ].join(" ")}
            onKeyDown={(e) =>
              type === "number" &&
              ["e", "+"].includes(e.key) &&
              e.preventDefault()
            }
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              isDebounce && setInnerValue(e.target.value);
              !dirty && setDirty(true);
              // setValue(e.target.value)
              onChange?.(e.target.value);
            }}
          />

          {label && (
            <label
              htmlFor={name}
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-3 -left-0.5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2  peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:scale-75"
            >
              {label}
            </label>
          )}
        </div>
        {trailing}
      </div>
      {error && (
        <span role="alert" className="text-error-500 text-14px400">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
