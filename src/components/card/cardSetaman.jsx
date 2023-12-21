import React from "react";

function CardSetaman({ data, jenis }) {
  return (
    <>
      {data.map((item) => {
        return (
          <section>
            <div className="card rounded-md shadow bg-slate-200/50">
              <div className="card-body">
                <h1 className="text-2xl font-semibold">
                  Kecamatan {item.nama_kecamatan}
                </h1>
              </div>
            </div>
            <div className="bg-slate-300/50 p-3 shadow">
              <h2 className="text-xl my-4 text-slate-500">Info Kegiatan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {item.kwt.map((data) => {
                  return (
                    <div
                      key={data.namakwt}
                      className="card rounded shadow bg-white"
                    >
                      <div className="card-body">
                        <h1 className="text-md font-medium">{data.namakwt}</h1>
                        {jenis == "semai" ? (
                          <p className="text-sm text-slate-600">
                            Jenis Tanaman: {data.jenis_tanaman}
                          </p>
                        ) : (
                          ""
                        )}
                        <hr />
                        <div className="flex justify-between items-center w-full my-2 rounded">
                          <div className="text-sm">
                            <p className="text-xl font-semibold">{data.nama}</p>
                            <p className="text-slate-600">{data.tgl_semai}</p>
                          </div>
                          <p className="text-end text-xl font-medium">
                            {jenis == "semai"
                              ? data.jumlah_semai
                              : data.jumlah_tanam}
                            <span className="text-sm text-slate-500">
                              {jenis}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default CardSetaman;
