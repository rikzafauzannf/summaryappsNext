import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SummayApps",
  description:
    "Aplikasi rangkuman data informasi pencapaian program di kota tasikmalaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <div className="navbar bg-base-100 shadow-xl mb-5">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl" href="/">
              SummaryApps
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/setaman">SetamanCinta</a>
              </li>
              <li>
                <a href="/bageur">Bageur</a>
              </li>
              {/* <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
        </div>
        <main className="mx-auto md:mx-10">{children}</main>
      </body>
    </html>
  );
}
