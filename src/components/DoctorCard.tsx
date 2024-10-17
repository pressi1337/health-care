import { link } from "joi";

export default function DoctorCard({ name = "", designation = "", link = "" }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 mt-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 text-gray-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          clipRule="evenodd"
        />
      </svg>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 mb-2">{designation}</p>
        <a
          href={link}
          target="_blank"
          className="mr-16  btn text-sm mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          🔗check
        </a>
      </div>
    </div>
  );
}
