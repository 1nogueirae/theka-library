import SelectStyles from '@/components/Select.module.css';
import CaretIcon from '@/assets/icons/CaretDown.svg?react';
import { useState } from 'react'

interface SelectProps {
    placeholder: string;
    options: string[];
    onChange?: (value: string) => void;
}

function Select({
    placeholder,
    options,
    onChange,
}: SelectProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    function handleSelect(option: string) {
        setValue(option);
        setOpen(false);
        onChange?.(option);
    }

    return (
        <div className={SelectStyles.selectContainer}>
            <div className={`${SelectStyles.box} ${open ? SelectStyles.open : ''}`}>
                <button
                    type="button"
                    className={SelectStyles.trigger}
                    onClick={() => setOpen(!open)}
                >
                    {value || placeholder}
                    <CaretIcon className={SelectStyles.icon} />
                </button>

                <ul className={SelectStyles.options}>
                    {options.map((option) => (
                        <li
                            key={option}
                            className={`${SelectStyles.option} ${option === value ? SelectStyles.selected : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Select;
export type { SelectProps };
