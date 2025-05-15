import React from "react";

function IncidentLog({ incidents }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-sm shadow-black/30 w-full p-10">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#081423]">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              No
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Tanggal & Jam
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Nama Website
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Domain
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Jenis Insiden
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {incidents.map((incident, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {incident.dateTime}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {incident.websiteName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {incident.domain}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {incident.incidentType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex items-center">
                  <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      incident.status.toLowerCase() === "baru"
                        ? "bg-red-500"
                        : incident.status.toLowerCase() === "dalam proses"
                          ? "bg-yellow-500"
                          : incident.status.toLowerCase() === "selesai"
                            ? "bg-green-500"
                            : "bg-gray-400"
                    }`}
                  ></span>
                  <span className="text-gray-900">{incident.status}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IncidentLog;
