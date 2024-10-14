import Avatar from "../Avatar";
type LeftMessageProps = {
  message: string;
  AvatarName: string;
};

export default function LeftMessage({
  message = "",
  AvatarName = "",
}: LeftMessageProps) {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <Avatar text={AvatarName} />
        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>
            {" "}
            {message.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
