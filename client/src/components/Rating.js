import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating }) => {
  const { rate, count } = rating;
  return (
    <>
      {rate > 0 && rate <= 2 && (
        <div className="flex items-center space-x-2 my-1.5">
          <span className="text-yellow-600 text-sm font-medium">{rate}</span>
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiOutlineStar className="text-yellow-500 text-sm" />
            <AiOutlineStar className="text-yellow-500 text-sm" />
            <AiOutlineStar className="text-yellow-500 text-sm" />
          </div>
          <span className="text-xs font-medium text-gray-500">({count})</span>
        </div>
      )}
      {rate > 2 && rate <= 3 && (
        <div className="flex items-center space-x-2 my-1.5">
          <span className="text-yellow-600 text-sm font-medium">{rate}</span>
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiOutlineStar className="text-yellow-500 text-sm" />
            <AiOutlineStar className="text-yellow-500 text-sm" />
          </div>
          <span className="text-xs font-medium text-gray-500">({count})</span>
        </div>
      )}
      {rate > 3 && rate <= 4 && (
        <div className="flex items-center space-x-2 my-1.5">
          <span className="text-yellow-600 text-sm font-medium">{rate}</span>
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiOutlineStar className="text-yellow-500 text-sm" />
          </div>
          <span className="text-xs font-medium text-gray-500">({count})</span>
        </div>
      )}
      {rate > 4 && rate <= 5 && (
        <div className="flex items-center space-x-2 my-1.5">
          <span className="text-yellow-600 text-sm font-medium">{rate}</span>
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
            <AiFillStar className="text-yellow-500 text-sm" />
          </div>
          <span className="text-xs font-medium text-gray-500">({count})</span>
        </div>
      )}
    </>
  );
};

export default Rating;
