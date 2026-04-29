import logo from "@/assets/logo.png";
import Image from "next/image";
import { compareAsc, format } from "date-fns";

const Header = () => {
  const DateDisplay = () => {
    const today = new Date();
    const formatted = format(today, "EEEE, MMMM dd, yyyy");

    return <p className="text-gray-600 font-medium">{formatted}</p>;
  };

  return (
    <div className="text-center py-8 space-y-4">
      <Image
        src={logo}
        width={300}
        height={200}
        alt="Website logo img"
        className="mx-auto"
      />
      <p className="text-gray-600 font-medium">
        Journalism Without Fear or Favour
      </p>
      {DateDisplay()}
    </div>
  );
};

export default Header;
