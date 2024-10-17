import { useState } from "react";
import Avatar from "../Avatar";

export default function RightQAMessage({
  message = "",
  value = "",
  AvatarName = "",
  code = "",
  onClick = (key: string, value: any) => {},
  submitted = false,
  prediction = false,
  inputType = "select",
  options = [],
  validator = {},
  name = "name",
}: any) {
  const [values, setValues] = useState(value);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const { error } = validator?.validate(
      { [name]: values },
      { abortEarly: false }
    );

    if (error) {
      setError(error.message);
    } else {
      onClick(code, values);
    }
  };

  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <Avatar text={AvatarName} />
        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <div>
            {message}
            {inputType == "text" ? (
              <input
                type="text"
                value={values}
                onChange={(e: any) => {
                  setError("");
                  setValues(e.target.value);
                }}
                readOnly={submitted}
                className="border-b-2 border-gray-400 focus:outline-none focus:border-indigo-500 appearance-none bg-transparent px-2 py-1"
              />
            ) : (
              <select
                value={values}
                disabled={submitted}
                onChange={(e: any) => {
                  setError("");
                  setValues(e.target.value);
                }}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg max-w-52"
              >
                <option value="" disabled selected>
                  select...
                </option>
                {options.map((item: any) => (
                  <option selected={item === values}>{item}</option>
                ))}
              </select>
            )}
            ?
          </div>

          {error && <p className="text-red-800 text-right">{error}</p>}
        </div>
      </div>
      <div className="flex items-center justify-start flex-row-reverse">
        {!submitted && (
          <button
            onClick={handleSubmit}
            className="mr-16 btn mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {prediction ? "prediction" : "continue"}
          </button>
        )}
      </div>
    </div>
  );
}
