
interface DateSelectorProps {
  fromDate: string;
  toDate: string;
  onFromDateChange: (date: string) => void;
  onToDateChange: (date: string) => void;
}

export default function DateSelector({ fromDate, toDate, onFromDateChange, onToDateChange }: DateSelectorProps) {
  return (
    <div className="flex gap-5 mb-4">
      <input
        type='date'
        value={fromDate}
        onChange={(e) => onFromDateChange(e.target.value)}
        className="form-control border border-gray-300 text-sm w-full h-[35px] px-1 text-center"
        placeholder="Start Date" />
      <input
        type='date'
        value={toDate}
        onChange={(e) => onToDateChange(e.target.value)}
        className="form-control border border-gray-300 text-sm w-full h-[35px] px-1 text-center"
        placeholder="End Date" />
    </div>
  );
}
