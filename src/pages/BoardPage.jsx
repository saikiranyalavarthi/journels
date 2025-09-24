import React from "react";

export default function BoardPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Page Title */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
            Editorial Board
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base italic">
            Summary:{" "}
            <span className="text-teal-600 dark:text-teal-400">
              Editor-in-Chief
            </span>{" "}
            ·{" "}
            <span className="text-teal-600 dark:text-teal-400">
              Associated Editors
            </span>{" "}
            ·{" "}
            <span className="text-teal-600 dark:text-teal-400">
              Editorial Board
            </span>
          </p>
        </header>

        {/* Editor-in-Chief */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-teal-600 pb-2 text-teal-700 dark:text-teal-400">
            Editor-in-Chief
          </h2>
          <ul className="space-y-6">
            <li className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
              <p className="font-semibold text-lg">Carlos Eduardo Ambrósio</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Faculdade de Zootecnia e Engenharia de Alimentos da Universidade
                de São Paulo - FZEA/Universidade de São Paulo, SP, Pirassununga,
                SP, Brasil
              </p>
            </li>
            <li className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
              <p className="font-semibold text-lg">Felipe Perecin</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Faculdade de Zootecnia e Engenharia de Alimentos da Universidade
                de São Paulo - FZEA/Universidade de São Paulo, Pirassununga, SP,
                Brasil
              </p>
            </li>
          </ul>
        </section>

        {/* Associated Editors */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-teal-600 pb-2 text-teal-700 dark:text-teal-400">
            Associated Editors
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
              <p className="font-semibold text-lg">
                Angela Maria Gonella Diaza
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                University of Florida, Marianna, FL, USA
              </p>
            </li>
            <li className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
              <p className="font-semibold text-lg">
                Joanna Maria Gonçalves de Souza Fabjan
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Faculdade de Veterinária, Universidade Federal Fluminense - UFF,
                Niterói, RJ, Brasil
              </p>
            </li>
            <li className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
              <p className="font-semibold text-lg">Zamira Gibb</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The University of Newcastle, Callaghan, NSW, Australia
              </p>
            </li>
          </ul>
        </section>

        {/* Editorial Board */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-teal-600 pb-2 text-teal-700 dark:text-teal-400">
            Editorial Board
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [
                "Andrzej Bartke",
                "Southern Illinois University, Springfield, IL, USA",
              ],
              [
                "Antônio Carlos S. Castro",
                "Universidade Federal de Minas Gerais, Belo Horizonte, MG, Brasil",
              ],
              [
                "Arlindo A.A. Moura",
                "Universidade Federal Ceará, Fortaleza, CE, Brasil",
              ],
              [
                "Barry D. Bavister",
                "University of New Orleans, New Orleans, LO, USA",
              ],
              [
                "Bart Gadella",
                "Ghent University, Belgium and Utrecht University, The Netherlands",
              ],
              [
                "Brian Setchell",
                "University of Adelaide, Hanson Institute, Adelaide, Australia",
              ],
              [
                "Daniele dos Santos Martins",
                "Universidade de São Paulo, Pirassununga, SP, Brazil",
              ],
              ["Edward L. Squires", "Colorado State University, USA"],
              [
                "Fernanda da Cruz Landim-Alvarenga",
                "Universidade Estadual de São Paulo, Botucatu SP, Brasil",
              ],
              [
                "Goro Yoshizaki",
                "Tokyo University of Marine Science and Technology, Tokyo, Japan",
              ],
              [
                "Heriberto Rodriguez-Martinez",
                "BHK/O&G Linköping University, SE, Linköping, Sweden",
              ],
              [
                "Hugo P. Godinho",
                "Pontifica Universidade Católica/Minas and Universidade Federal de Minas Gerais, Belo Horizonte, MG, Brasil",
              ],
              [
                "João Carlos Deschamps",
                "Universidade Federal de Pelotas, Pelotas, RS, Brasil",
              ],
              [
                "J.A. (Lulu) Skidmore",
                "The Camel Reproduction Centre, Dubai, UAE",
              ],
              [
                "Katrin Hinrichs",
                "Texas A&M University, College Station, TX, USA",
              ],
              ["Keith Betteridge", "University of Guelph, Toronto, Canada"],
              [
                "Luis Renato França",
                "Universidade Federal de Minas Gerais, Belo Horizonte, MG, Brasil",
              ],
              ["Mário Binelli", "University of Florida, Gainesville, FL, USA"],
              [
                "Rex A. Hess",
                "University of Illinois, Urbana-Champaign, Urbana, USA",
              ],
              [
                "Rüdiger W. Schulz",
                "Utrecht University, Utrecht, The Netherlands",
              ],
              [
                "Sue M. McDonnell",
                "University of Pennsylvania, Philadelphia, PA, USA",
              ],
              [
                "Tiziana A.L. Brevini",
                "Università degli Studi di Milano, Milan, Italy",
              ],
              [
                "Wilma de Grava Kempinas",
                "Universidade Estadual de São Paulo, Botucatu SP, Brasil",
              ],
            ].map(([name, affiliation], i) => (
              <li
                key={i}
                className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-lg transition"
              >
                <p className="font-semibold text-lg">{name}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {affiliation}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
