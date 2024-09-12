import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useState(() => {
    if (localStorage.getItem('dark') && localStorage.getItem('dark') === 'true') {
      setIsDark(true);
      document.body.classList.add('dark');
    }else{
      setIsDark(false);
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
    localStorage.setItem('dark', !isDark);
  }

  return (
    <>
      <h1 className="xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl bg-sky-600 text-[#ccc] py-2 sm:py-3 md:py-4 lg:py-6 xl:py-10 hover:text-white cursor-pointer flex justify-center items-center transition-all duration-500 dark:bg-stone-700 dark:text-stone-100 dark:hover:bg-black dark:hover:text-stone-50" onClick={() => toggleDark()}>App</h1>
      <div className="grid gap-4 md:grid-cols-3 container mx-auto p-4">
        <div className="border p-3 shadow rounded">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim molestias culpa, odit officia ipsam excepturi facere accusamus itaque, ullam, repellendus rem. Exercitationem, quis vitae ex id voluptatem aspernatur quaerat possimus illum sit cupiditate neque ipsum! Dolorum fuga autem excepturi tempore.
        </div>
        <div className="border p-3 shadow rounded">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim molestias culpa, odit officia ipsam excepturi facere accusamus itaque, ullam, repellendus rem. Exercitationem, quis vitae ex id voluptatem aspernatur quaerat possimus illum sit cupiditate neque ipsum! Dolorum fuga autem excepturi tempore.
        </div>
        <div className="border p-3 shadow rounded">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim molestias culpa, odit officia ipsam excepturi facere accusamus itaque, ullam, repellendus rem. Exercitationem, quis vitae ex id voluptatem aspernatur quaerat possimus illum sit cupiditate neque ipsum! Dolorum fuga autem excepturi tempore.
        </div>
      </div>
    </>
  )
}

export default App
