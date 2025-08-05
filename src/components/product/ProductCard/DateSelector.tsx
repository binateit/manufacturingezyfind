export default function DateSelector() {
  return (
    <div className="flex gap-5 mb-4">
      <input type='text' className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 text-center" placeholder="Start Date" />
      <input type='text' className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 text-center" placeholder="End Date" />
    </div>
  );
}
