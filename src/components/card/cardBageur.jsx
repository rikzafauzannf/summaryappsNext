import React from "react";

function CardBageur({
  header,
  tanggal,
  persentase,
  target,
  terkumpul,
}) {
  return (
    
      <div className="card rounded-md shadow bg-blue-500/55">
        <div className="card-body text-slate-800">
          <h1 className="text-xl font-bold">{header}</h1>
          <p className="text-sm text-gray-600">Tanggal Terakhir: {tanggal}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 g-3 w-full bg-blue-600 p-5 rounded text-white shadow-lg">
            <div className="text-center">
              <h3 className="text-lg font-light">Persentase</h3>
              <h1 className="text-xl font-bold">{persentase}%</h1>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-light">Target</h3>
              <h1 className="text-xl font-bold">
                {target} <span className="font-light text-sm">Barang</span>
              </h1>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-light">Barang Terkumpul</h3>
              <h1 className="text-xl font-bold">
                {terkumpul} <span className="font-light text-sm">Barang</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default CardBageur;
