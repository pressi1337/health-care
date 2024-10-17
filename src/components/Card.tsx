export default function Card({ title = "", Data = [] }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
        {title}
      </h5>

      {/* <p className="mb-1 font-normal text-gray-500 ">1.Food One</p>
        <p className="mb-1 font-normal text-gray-500 ">1.Food One</p> */}
      {Data.map((item: any, index: any) => (
        <p className="mb-1 text-sm">
          {index + 1}. {item}
        </p>
      ))}
    </div>
  );
}
