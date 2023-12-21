import CardBageur from "@/components/card/cardBageur";
import { responseBageur } from "../api/getAPi";

export default async function Bageur() {
  try {
    // Memastikan bahwa status respons adalah OK (200)
    if (!responseBageur.ok) {
      throw new Error(`Failed to fetch data. Status: ${responseBageur.status}`);
    }

    // Memastikan bahwa respons dari API adalah dalam format JSON
    const data = await responseBageur.json();

    // Memastikan bahwa respons dari API berisi data yang diharapkan
    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data format received from the API");
    }

    return (
      <>
        <h1 className="text-2xl font-bold mb-3">Dashboard Bageur</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.map((item) => {
            return (
              <CardBageur
                header={item.judul_galang}
                tanggal={item.tgl_akhir}
                persentase={item.persentase}
                target={item.target}
                terkumpul={item.barang_terkumpul}
              />
            );
          })}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching and rendering data:", error.message);
    // Handle error as needed, misalnya, tampilkan pesan kesalahan kepada pengguna
    return <p>Terjadi kesalahan saat memuat data. Silakan coba lagi nanti.</p>;
  }
}
