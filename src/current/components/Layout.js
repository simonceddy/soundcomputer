function Layout({ children }) {
  return (
    <div className="w-full h-full col justify-center items-center bg-lime-200 dark:bg-lime-950 text-purple-900 dark:text-purple-300">
      <div className="w-full rounded-sm border-2 border-sky-800 sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 sm:mx-auto bg-slate-500/30 col justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
}

export default Layout;
