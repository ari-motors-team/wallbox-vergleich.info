import { useStore } from "../../store";

function FilterCheckboxMobile(props) {
  const { state, dispatch } = useStore();

  return (
    <>
      <input
        className=" appearance-none w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-white checked:bg-blue-dark  after:content-['✔'] after:relative after:left-1 after:bottom-0.5  "
        type="checkbox"
        checked={
          state[props.category].map((el) => el.min).join(" ") == props.value
        }
        onChange={() => {
          return null;
        }}
      ></input>
    </>
  );
}

export default FilterCheckboxMobile;
