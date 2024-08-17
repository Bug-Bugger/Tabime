import { useState } from "react";

export default function Landing() {
  const [sortedXml, setSortedXml] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const xmlData = e.target.result;
      sortXml(xmlData);
    };
    reader.readAsText(file);
  };

  const sortXml = (xmlData) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "application/xml");
    const animes = Array.from(xmlDoc.getElementsByTagName("anime"));

    const jsonAnimes = [];

    animes.forEach((anime) => {
      const myScore = anime.getElementsByTagName("my_score")[0];
      if (myScore) {
        let title = anime.getElementsByTagName("series_title")[0].textContent;
        let score = parseFloat(myScore.textContent);
        jsonAnimes.push({ title, score });
      }
    });

    jsonAnimes.sort((a, b) => {
      return b.score - a.score;
    });
    function jsonToTable(jsonData) {
      let table = '<table border="1"><tr><th>Title</th><th>Score</th></tr>';
      jsonData.forEach((anime) => {
        table += `<tr><td>${anime.title}</td><td>${anime.score}</td></tr>`;
      });
      table += "</table>";
      return table;
    }

    const tableHtml = jsonToTable(jsonAnimes);
    setFileUploaded(true);
    setSortedXml(tableHtml);
  };

  return (
    <div className=" h-screen">
      <div className=" shadow-md p-6 mx-auto">
        <h1 className="text-3xl font-sans font-semibold">OtakuOdyssey</h1>
      </div>
      <div className="flex justify-center">
        {!fileUploaded && (
          <form className="w-1/2 p-6">
            <h1 className="block font-medium text-gray-300">
              Upload list file (XML)
            </h1>
            <input
              type="file"
              accept=".xml"
              className="mt-1 block px-3 py-5 w-fit"
              onChange={handleFileUpload}
            />
          </form>
        )}
      </div>

      <div
        className="h-1/2 flex justify-center"
        dangerouslySetInnerHTML={{ __html: sortedXml }}
      />
    </div>
  );
}
