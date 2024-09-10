import { useState } from "preact/hooks"

export const Filter = () => {
    const [options, setOptions] = useState([
        { name: "Daily", checked: true },
        { name: "Weekly", checked: false },
        { name: "Monthly", checked: false }
    ]);

    const onChange = (selectedIndex: Number) => {
        var updatedOptions = options.slice().map((option, index) => {
            option.checked = index === selectedIndex ? true : false;
            return option;
        });

        setOptions([...updatedOptions]);
    };

    return <div class="flex flex-col gap-5 p-6 text-left">{
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