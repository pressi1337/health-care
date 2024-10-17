import Avatar from "../Avatar";
import Card from "../Card";
import DoctorCard from "../DoctorCard";
import DotLoader from "../DotLoader";
type LeftMessageProps = {
  message: string;
  AvatarName: string;
  loading?: boolean;
  output?: boolean;
  doctors?: any;
  Remedies?: any;
  foods?: any;
  onContinue?: () => void;
};

export default function LeftMessage({
  message = "",
  AvatarName = "",
  loading = false,
  output = false,
  doctors = [],
  Remedies = [],
  foods = [],
  onContinue = () => {},
}: LeftMessageProps) {
  return (
    <div className="col-start-1 col-end-12 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <Avatar text={AvatarName} />
        {loading ? (
          <DotLoader />
        ) : (
          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
            <div className={output ? "font-bold" : ""}>
              {" "}
              {message.split("\n").map((line, index) => (
                <p key={index}>
                  {line}
                  <br />
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      {Boolean(doctors.length) && (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 p-4 mx-8">
          {doctors.map((item: any) => (
            <DoctorCard
              name={item.name}
              designation={item.designation}
              link={item.link}
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 mx-12 my-2 ">
        {Boolean(Remedies.length) && (
          <Card title=" 🌿 Natural Remedies" Data={Remedies} />
        )}

        {Boolean(foods.length) && (
          <Card title=" 🥗 Food Recommendations" Data={foods} />
        )}
      </div>

      <div className="flex justify-center">
        {Boolean(output && !loading) && (
          <button
            onClick={onContinue}
            className="mr-16 btn  mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
