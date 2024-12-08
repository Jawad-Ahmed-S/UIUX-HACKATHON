import { DeliveryIcon } from "../icons";

function ServiceTile({ title, description, Icon }) {
  return (
    <div className="bg-custom-gray-light flex justify-center items-center w-[18rem] md:flex-grow h-[15rem] md:w-[90%] md:h-auto">
      <div className="pt-[3rem] pb-[3rem] ml-[3rem] mr-[3rem]">
        <Icon className="w-[1.5rem] mb-4" />
        <h1 className="headline-four text-custom-purple-dark mb-4">{title}</h1>
        <p className="body-medium mb-4">{description}</p>
      </div>
    </div>
  );
}

export default ServiceTile;
