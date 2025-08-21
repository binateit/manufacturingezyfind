import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface QuantitySelectorProps {
    value: number;
    onChange: (newValue: number) => void;
}

export default function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
    return (
        <div className="quntity-input-box relative mb-3 flex">
            <input
                aria-label="Quantity"
                type='number'
                className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 font-semibold text-center"
                onChange={(e) => onChange(Number(e.target.value))}
                value={value}
            />
            <button aria-label="Decrease Quantity" className="bg-secondary absolute left-0 h-[35px] w-[35px] text-white flex items-center justify-center"
                onClick={() => onChange(Math.max(0, value - 1))}>
                <FontAwesomeIcon icon={faMinus} className="w-5 h-5" />
            </button>
            <button aria-label="Increase Quantity" className="bg-secondary absolute right-0 h-[35px] w-[35px] text-white flex items-center justify-center"
                onClick={() => onChange(value + 1)}>
                <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
            </button>
        </div>
    );
}
