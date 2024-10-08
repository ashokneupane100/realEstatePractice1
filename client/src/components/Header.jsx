export const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">CodingCleverly</span>
          <span className="text-slate-800 ml-1">Estate</span> {/* Added margin-left for spacing */}
        </h1>
        <form action="#">
          <input
            type="text"
            className="bg-white rounded-full px-4 py-2 focus:outline-none"
            placeholder="Search ..."
          />
        </form>
      </div>
    </header>
  );
};
