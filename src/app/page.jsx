import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen">
        <div>
          <section className="space-y-3">
            <h1 className="text-8xl font-bold">SummaryApps</h1>
            <p className="text-xl text-slate-500">
              Aplikasi rangkuman data dari aplikasi yang ada di Kota Tasikmalaya
            </p>
          </section>
          <section className="my-8">
            <h3 className="text-2xl font-medium text-slate-600">
              Lihat Data Sekarang
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
              <a href="/setaman" className="btn btn-md w-full rounded-md">
                SetamanCinta
              </a>
              <a href="/bageur" className="btn btn-md w-full rounded-md">
                Bageur
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
