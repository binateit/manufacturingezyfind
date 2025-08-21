type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type ValueKeys<T> = {
  [K in keyof T]: T[K] extends string | number ? K : never;
}[keyof T];

type SelectionMode = "single" | "multiple";

interface FilterSectionProps<T> {
  title: string;
  data?: T[];
  selected?: number[]; // even for single, store as array with 0/1 elements
  onChange: (selectedValues: number[]) => void;
  labelKey: StringKeys<T>;
  valueKey: ValueKeys<T>;
  mode?: SelectionMode; // NEW
}

export function FilterSection<T>({
  title,
  data = [],
  selected = [],
  onChange,
  labelKey,
  valueKey,
  mode = "multiple", // default to multiple selection
}: FilterSectionProps<T>) {
  if (!data.length) return null;

  const handleChange = (value: number) => {
    if (mode === "single") {
      onChange([value]); // replace entire selection
    } else {
      const isSelected = selected.includes(value);
      const newSelection = isSelected
        ? selected.filter((item) => item !== value)
        : [...selected, value];
      onChange(newSelection);
    }
  };

  return (
    <div className="border-b border-gray-300">
      <div className="bg-white px-4 py-3 flex justify-between items-center cursor-pointer">
        <p className="text-md font-semibold">{title}</p>
      </div>
      <div className="bg-gray-50 px-4 py-5 max-h-[300px] overflow-y-auto">
        {data.map((item, index) => {
          const rawValue = item[valueKey];
          const value = typeof rawValue === "number" ? rawValue : Number(rawValue);
          const label = item[labelKey] as string;

          return (
            <label
              className="flex gap-2 items-center cursor-pointer"
              key={`${value || index}-${index}`}
            >
              <input
                type={mode === "single" ? "radio" : "checkbox"}
                name={title} // important for grouping radios
                checked={selected.includes(value)}
                onChange={() => handleChange(value)}
                aria-label={`${mode === "single" ? "Select" : "Toggle"} ${label} for ${title} filter`}
              />
              <p className="text-md">{label}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
}
