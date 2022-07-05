//import filtersData from "../filtersData.json";
//
const OptionItem = ({ details }) => {
  return details.map((option) => (
    <option key={option.id} value={option.value}>
      {option.name}
    </option>
  ));
};
export default OptionItem;
