import { useStore } from "../store";

function FilterCheckbox(props) {
  const { state, dispatch } = useStore();
  return (
    <>
      <input
        className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-white checked:bg-blue-dark  after:content-['✔'] after:relative after:left-1 after:bottom-0.5 border-solid "
        type="checkbox"
        id={props.checkbox.id}
        name={props.checkbox.categoryName}
        value={props.checkbox.value}
        // defaultChecked={false}
        /* CHECKING WHICH CHECKBOX IS ACTIVE UPON THE value */

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

export default FilterCheckbox;
