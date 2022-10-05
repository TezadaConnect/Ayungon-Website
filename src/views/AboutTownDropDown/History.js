import React from "react";
import Footer from "../../components/Footer";
import ayungon_municipality from "../../assets/imgslider/ayungon_municipality.jpg";
import ayungon_municipality_1 from "../../assets/imgslider/ayungon_municipality_1.jpg";
import MAXIMO_ENARDECIDO from "../../assets/Mayors/MAXIMO_ENARDECIDO.jpg";
import JUAN_TABURAZA from "../../assets/Mayors/JUAN_TABURAZA.jpg";
import IRENEO_TUBIO from "../../assets/Mayors/IRENEO_TUBIO.jpg";
import RECARDO_GARCIA from "../../assets/Mayors/RECARDO_GARCIA.jpg";
import NENIMICO_ENARDECIDO from "../../assets/Mayors/NENIMICO_ENARDECIDO.jpg";
import MARTIN_GAROL from "../../assets/Mayors/MARTIN_GAROL.jpg";
import LORENZO_DY from "../../assets/Mayors/LORENZO_DY.jpg";
import EdselEnardecido from "../../assets/Mayors/EdselEnardecido.jpeg";
import ErwinAgustino from "../../assets/Mayors/ErwinAgustino.jpeg";
const History = () => {
  const mayors = [
    {
      image: MAXIMO_ENARDECIDO,
      alt: "MAXIMO_ENARDECIDO",
      name: "Mayor Maximo Enardecido",
      year: "1940-1951",
    },
    {
      image: JUAN_TABURAZA,
      alt: "JUAN_TABURAZA",
      name: "Mayor Juan Taburaza",
      year: "1951-1959",
    },
    {
      image: IRENEO_TUBIO,
      alt: "IRENEO_TUBIO",
      name: "Mayor Ireneo Tubio",
      year: "1959-1963",
    },
    {
      image: MARTIN_GAROL,
      alt: "MARTIN_GAROL",
      name: "Mayor Martin Garol Jr.",
      year: "1963-1967",
    },
    {
      image: RECARDO_GARCIA,
      alt: "RECARDO_GARCIA",
      name: "Mayor Rcardo Garcia",
      year: "1967-1977",
    },
    {
      image: NENIMICO_ENARDECIDO,
      alt: "NENIMICO_ENARDECIDO",
      name: "Mayor Nenimico Enardecido",
      year: "1977-1986",
    },
    {
      image: MARTIN_GAROL,
      alt: "MARTIN_GAROL",
      name: "Mayor Martin Garol Jr.",
      year: "1986-1988",
    },
    {
      image: LORENZO_DY,
      alt: "LORENZO_DY",
      name: "Mayor Lorenzo C. Dy ",
      year: "1988-1998",
    },
    {
      image: EdselEnardecido,
      alt: "EdselEnardecido",
      name: "Mayor Edsel Enardecido ",
      year: "1998-2007",
    },
    {
      image: ErwinAgustino,
      alt: "ErwinAgustino ",
      name: "Mayor Erwin Agustino  ",
      year: "2007-2010",
    },
    {
      image: EdselEnardecido,
      alt: "EdselEnardecido",
      name: "Mayor Edsel Enardecido ",
      year: "2010-2019",
    },
    {
      image: ErwinAgustino,
      alt: "ErwinAgustino ",
      name: "Mayor Erwin Agustino  ",
      year: "2019-2022",
    },
  ];
  return (
    <div className=" w-full flex  flex-col">
      <div className="flex justify-center">
        <div className="flex  bg-white  flex-row justify-center px-5 ">
          <div className="lg:flex hidden w-2/12 bg-white   pt-24 flex-col">
            <div>
              <h1 className="font-bold text-lg flex justify-center uppercase font-Cinzel text-center ">
                Mayors Of Ayungon
              </h1>
            </div>

            <div className="flex justify-center flex-col gap-10 drop-shadow-lg pt-10 font-serif  ">
              {mayors?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className=" text-lg flex justify-center flex-col items-center "
                  >
                    <img className="w-32" src={item?.image} alt={item?.alt} />
                    <h1>
                      <u>{item?.name}</u>
                    </h1>
                    <h2>{item?.year}</h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex  font-serif py-10 w-8/12 flex-col gap-5">
            <div className="flex justify-center  font-serif font-bold text-center lg:text-4xl pt-5">
              <h1> HISTORY OF AYUNGON NEGROS ORIENTAL</h1>
            </div>
            <div className=" flex flex-col  ">
              <div className="flex flex-col justify-center items-center text-justify relative">
                <div className="absolute z-20">className</div>
                <img
                  className="w-10/12 drop-shadow-lg gap-2 relative"
                  src={ayungon_municipality}
                  alt="ayungon_municipality"
                />
                <p className="lg:px-16 py-10 text-xl">
                  The Cura Parroco were Rev. Father Eusebio Valderama and Rev.
                  Father Setorio, Rev. Father Teodorico Lungca who died in this
                  place, Rev. Macario Ga, Rev. Father Emiliano Pardo, Rev.
                  Father Waja, Rev. Father Santos, Rev. Claudio Magbanua, Rev.
                  Father Antonio Manigo, Rev. Father Gotera, Rev. Father Morante
                  and Rev. Father Pinero. The known teachers of long ago were
                  Macario, a man from bohol, Jose Gonzales, Mareiana Dayagdag,
                  Pascual Romanio, Claudio Onayan, Ana Castanilla, Martin
                  Gonzales and Lazaro Segura. While Ayungon was a barrio of
                  Tayasan, it was agreed among the prominent men of Tayasan and
                  Ayungon that the officials of the town of Tayasan must be
                  shared equally between the two places so that when a man from
                  Tayasan is elected president the vice-president must be from
                  Ayungon and vise versa. Pablo Tiongco was once a president of
                  Tayasan and Buenaventura Borromeo was once a vice president of
                  the municipality of Tayasan. Ayungon was under Tayasan for
                  twenty thre years.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center text-justify ">
                <div className="w-full  uppercase justify-center items-center text-center flex font-serif font-bold lg:text-4xl pt-5 ">
                  <h1 className="flex ">Founded </h1>
                </div>
                <img
                  className="w-10/12 drop-shadow-lg flex py-2	 gap-2"
                  src={ayungon_municipality_1}
                  alt="ayungon_municipality_1"
                />

                <p className="lg:px-16 py-5 text-xl ">
                  The town of Ayungon was founded in 1924 through the efforts of
                  the following prominent men: Mr. Pablo Tiongco, Buenaventura
                  Borromeo, Benito Sanches, Apolonio Deguit, Gregorio Emperado,
                  Esteban Mahinay, Salvador Emperado, Victoriano Embalsado,
                  Ireneo Pael, Isidoro Mahinay, Nicolas Calumba, Juan Taburaza,
                  Raymundo Pastor, Basilio Villegas and Antera Romano. This town
                  was formally established in 1924 when Governor General Leonard
                  Wood came purposely to see the place andappointed the
                  temporary officials through the recommendationof the
                  Provincial governor Enrique Villanueva. The following were the
                  officials appointed by the Governor-General Leonard Wood;
                  Benito Sanches as president and Timoteo Perez as Vice
                  President and the following were the councilors: Apolonio
                  Deguit, Nicolas Calumba, Juan Taburaza, Basilio Revelegia and
                  Sulpicio Tiengo. The convention headed by the Provincial
                  Governor which was held for the purpose of choosing the real
                  officials, the following came out: Benito Sanches as president
                  and Apolonio Deguit as vice-president. Basilio Villegas took
                  the place of Apolonio Deguit as councilor. The other
                  councilors appointed were also chosen by the conventionests.
                  Benito Sanches was not able to finish the term because he died
                  before the expiration of the term so that Apolonio Deguit the
                  vice president took the place as president of the town. On the
                  election of 1928, Julian Villanueva was elected as president
                  and Juan Tabaraza as Vice President. Julian, Villanueva held
                  the position until 1941. After Julian Villanueva, Maximo
                  Enardecido with Juan Taburaza as vice president headed the
                  town until 1950. The vice mayorship of Juan Taburaza was
                  interrupted only for one term when he retired in politics and
                  gave way to a young man Baldomero Emperado. On the election of
                  1951, Juan Taburaza won with Macario Martinez as vice mayor.
                  The justices of the peace who served in the municipality of
                  Ayungon were Zacarias Alo, Vicente Parras and now we have
                  Joaquin Montenegro as our Justice of the Peace. The municipal
                  secretaries since the time of Benito Sanches to the present
                  were Demetrio colongon, Maximo Enardecido, Joselyn Barraquias,
                  and Lorenzo Ruiz the present incumbent. The treasurers were
                  the following: Pedro Camseko, Mr. Malanog, Roman Adanza,
                  Matelde Remollo, Areadio Lariosa, Felix Fontelo, Magdaleno
                  Catalbas, and Filomeno Barrica, the present treasurer. The
                  position of the chief of police since the time of Benito
                  Sanches to this time is occupied by Feliciano Alberto. During
                  the Spanish regime the town plaza was located at the beach. To
                  this time we can still see the ruins of the old municipal
                  building and the church. The present town plaza was
                  established during the latter part of the Spanish rule. The
                  reason for its transfer was due to the most terrible flood
                  that occurred ever since. The ruins of the Spanish buildings
                  in the present poblacion site could no longer be seen for the
                  people removed The latter part of the Spanish regime was
                  marked by a terrible epidemic of smallpox which took away
                  almost two thirds of the people of Ayungon. It was so terrible
                  and mournful that the houses had got to be burned. There were
                  no enough persons available to burry the dead. During the
                  World War II almost every activity stood still for the people
                  of the lowlands went to the mountains to hide. They were
                  afraid of the savage soldiers of Japan. The brutes and savages
                  established their garrison in Ayungon with the house of
                  Joaquin Lim as their headquarters. Before the Japanese landed
                  in Negros most of the men in lowlands prepared bolos, daggers
                  and other weapons but at the mention of Japanese patrol these
                  weapons were made tails for they ran to the mountains.
                  Villanueva held the position until 1941. After Julian
                  Villanueva, Maximo Enardecido with Juan Taburaza as vice
                  president headed the town until 1950. The vice mayorship of
                  Juan Taburaza was interrupted only for one term when he
                  retired in politics and gave way to a young man Baldomero
                  Emperado. On the election of 1951, Juan Taburaza won with
                  Macario Martinez as vice mayor. The justices of the peace who
                  served in the municipality of Ayungon were Zacarias Alo,
                  Vicente Parras and now we have Joaquin Montenegro as our
                  Justice of the Peace. The municipal secretaries since the time
                  of Benito Sanches to the present were Demetrio colongon,
                  Maximo Enardecido, Joselyn Barraquias, and Lorenzo Ruiz the
                  present incumbent. The treasurers were the following: Pedro
                  Camseko, Mr. Malanog, Roman Adanza, Matelde Remollo, Areadio
                  Lariosa, Felix Fontelo, Magdaleno Catalbas, and Filomeno
                  Barrica, the present treasurer. The position of the chief of
                  police since the time of Benito Sanches to this time is
                  occupied by Feliciano Alberto. During the Spanish regime the
                  town plaza was located at the beach. To this time we can still
                  see the ruins of the old municipal building and the church.
                  The present town plaza was established during the latter part
                  of the Spanish rule. The reason for its transfer was due to
                  the most terrible flood that occurred ever since. The ruins of
                  the Spanish buildings in the present poblacion site could no
                  longer be seen for the people removed The latter part of the
                  Spanish regime was marked by a terrible epidemic of smallpox
                  which took away almost two thirds of the people of Ayungon. It
                  was so terrible and mournful that the houses had got to be
                  burned. There were no enough persons available to burry the
                  dead. During the World War II almost every activity stood
                  still for the people of the lowlands went to the mountains to
                  hide. They were afraid of the savage soldiers of Japan. The
                  brutes and savages established their garrison in Ayungon with
                  the house of Joaquin Lim as their headquarters. Before the
                  Japanese landed in Negros most of the men in lowlands prepared
                  bolos, daggers and other weapons but at the mention of
                  Japanese patrol these weapons were made tails for they ran to
                  the mountains.
                </p>

                <p className="lg:px-16 py-5 text-xl">
                  Some Filipino soldiers paraded on the streets so bravely
                  indeed, that many civilians were the victims of their cruelty.
                  They boxed, kicked, shot and even tortured civilians. Captain
                  Eugenio Antonio headed these soldiers. When the Japanese came
                  they were even faster than the manatad. They fled to the
                  mountains. The soldiers made the civilians worked on rice
                  bfields, building headquarters, carry bars of soaps and sacks
                  of salt to Negros Occidental. Ilawod is famous for skulls and
                  skeletons of human beings for the brutes tortured and killed
                  the captured Filipino soldiers and civilians in this place. To
                  this day the remains of the victims are visible. The people of
                  Ayungon were honored by the passing visit of Governor-General
                  Teodoro Roosebelt, Jr. The governor stopped a while to greet
                  the people who were waiting for him. This incident was
                  climaxed by a Fandango of the Governor-General and the old
                  woman Capitana Tiray. The period from 1896-1900 was one of a
                  relief to the people for the Americans brought to them a life
                  of freedom but theperiod from 1941 to 1945 was a time utmost
                  suffering for the freedom brought by the Americans were
                  grabbed by the invaders. Houses were burned, many were
                  tortured and killed, farms were abandoned. Many died of famine
                  and malaria. After the war the Americans rehabilitated the
                  town by giving the people money as war damages. The town was a
                  recipient of a new semi-permanent school building, a shop and
                  home Economics building.
                </p>
              </div>
              <div>
                <div className="w-full pl-16 uppercase flex font-serif font-bold text-4xl pt-5 ">
                  <h1 className="">The Name</h1>
                </div>
                <p className="px-16 py-5 text-xl text-justify">
                  There are several versions as to how Ayungon got its name but
                  one that sounds fascinating to its people is the story of
                  AYUNG. According to Dr. Tomoteo S. Oracion, noted
                  anthropologist and professor of Silliman University, during
                  the pre-Spanish time, a certain locality is called after the
                  most popular person living is that place. The most popular
                  person happened to be AYUNG, who a fisherman and had a hut
                  near the mouth of now Ayungon River. Travelers, who came
                  mostly on foot, were always at hid hut. Thus, his hut was
                  referred as Ayung’s place. The name later was suffixed with on
                  attached to his name the AYUNGON was born.
                </p>
                <div className="w-full pl-16 uppercase flex font-serif font-bold text-4xl pt-5 ">
                  <h1 className="">EARLY POLITICAL HISTORY</h1>
                </div>
                <p className="px-16 py-5 text-xl text-justify">
                  One version goes that when the Spaniards were exploring the
                  area, they happen to pass by a native cutting a tree. The
                  Spaniards might have asked the person of the place but the
                  native who do not understand the language surmised they were
                  asking for his name so he answered AYUNG and the Spaniards
                  might have no clearly understood what he said, asked the same
                  question again. This time the native might have thought they
                  were asking for the tree he was cutting, which abound in the
                  area, so he answered DUNGON. AYUNG – the name of the native
                  and DUNGON – the name of the tree he was cutting and abundant
                  in the area, AYUNG-DUNGON was the name for the area as coined
                  by the SpanDuring the fist political election of 1928, Julian
                  Villanueva was called President and was replaced by. Maximo
                  Enardecido who became the mayor when WORL WAR II broke out.
                  The Municipal government and townsfolks evacuated to the
                  mountains of pangi, a village southwest of Poblacion and part
                  of barangay GOMENTOC. The guerilla movement was led by Capt.
                  Eugenio “KUSGAN” Antonio, Liberation came In October
                  1944.iards and later on evolved to AYUNGON and became its name
                  until today.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden w-2/12  justify-center  pt-24">
            <div className="flex flex-col">
              <div className="text-xl justify-center flex font-bold font-serif uppercase">
                <h1>Offices</h1>
              </div>
              <div>
                <ul className="cursor-pointer pt-5 text-lg gap-5">
                  <li className="hover:scale-105">Toursim Office</li>
                  <li className="hover:scale-105">Mayor's Office</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default History;
