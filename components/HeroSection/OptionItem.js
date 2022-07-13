//import filtersData from "../filtersData.json";
//
const OptionItem = ({ details }) => {
  return details.map((option) => (
    <option key={option.id} value={option.value}>
      {option.title}
    </option>
  ));
};
export default OptionItem;
