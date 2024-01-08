import MySlide from "@/components/slick/slide";
import { responseSetaman } from "../api/getAPi";
import CardSetaman from "@/components/card/cardSetaman";

export default async function Semai() {
  try {
    // Memastikan bahwa status respons adalah OK (200)
    if (!responseSetaman.ok) {
      throw new Error(
        `Failed to fetch data. Status: ${responseSetaman.status}`
      );
    }

    // Memastikan bahwa respons dari API adalah dalam format JSON
    const data = await responseSetaman.json();
    // Memastikan bahwa respons dari API berisi data yang diharapkan
    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data format received from the API");
    }

    return (
      <>
        <h1 className="text-2xl font-bold mb-3">Data Semai</h1>
        <MySlide>
          <CardSetaman data={data} jenis={"semai"} />
        </MySlide>
      </>
    );
  } catch (error) {
    console.error("Error fetching and rendering data:", error.message);
    // Handle error as needed, misalnya, tampilkan pesan kesalahan kepada pengguna
    return <p>Terjadi kesalahan saat memuat data. Silakan coba lagi nanti.</p>;
  }
}
