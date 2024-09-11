import { useFilterStore } from "../store/filter-store";

export const Filter = () => {
    const options = useFilterStore((state) => state.filterState);
    const onChange = useFilterStore((state) => state.filterUpdate);

    return <div class="flex lg:flex-col flex-row justify-between w-full gap-5 p-8 text-left">{
        options.map((option, index) => {
            return (
                <div>
                    <input
                        type="radio"
                        name="filter"
                        id={option.name}
                        checked={option.checked}
                        onChange={onChange.bind(undefined, index)} />
                    <label className={option.checked ? '' : 'text-pale-blue'} htmlFor={option.name}>{option.name}</label>
                </div>
            )
        })
    }</div>;
}