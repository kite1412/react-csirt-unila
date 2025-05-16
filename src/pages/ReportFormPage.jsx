import React, { useState } from "react";
import SubmitIcon from "../assets/submitIcon.svg?react";

const ReportFormPage = () => {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    noWhatsApp: "",
    unitFakultasInstansi: "",
    jenisInsiden: "",
    deskripsiInsiden: "",
    buktiPendukung: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    //submission logic
  };

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="flex flex-col justify-center items-center pt-25 pb-10 gap-10 bg-white px-50">
      <h1 className="font-semibold text-black text-2xl">
        FORM PENGADUAN INSIDEN
      </h1>
      <div className="w-full h-fit bg-white rounded-lg shadow-sm shadow-black/30 p-8 border border-gray-100">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-30 px-10">
            {/* Left Column */}
            <div className="flex flex-col justify-between">
              {/* Nama Lengkap */}
              <div className="flex flex-col h-fit gap-1">
                <label
                  htmlFor="namaLengkap"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="namaLengkap"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleChange}
                  placeholder="Input"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col h-fit gap-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Input"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* No. WhatsApp */}
              <div className="flex flex-col h-fit gap-1">
                <label
                  htmlFor="noWhatsApp"
                  className="block text-sm font-medium text-gray-700"
                >
                  No. WhatsApp
                </label>
                <input
                  type="text"
                  id="noWhatsApp"
                  name="noWhatsApp"
                  value={formData.noWhatsApp}
                  onChange={handleChange}
                  placeholder="Input"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Unit/Fakultas/Instansi */}
              <div className="flex flex-col h-fit gap-1">
                <label
                  htmlFor="unitFakultasInstansi"
                  className="block text-sm font-medium text-gray-700"
                >
                  Unit/Fakultas/Instansi
                </label>
                <input
                  type="text"
                  id="unitFakultasInstansi"
                  name="unitFakultasInstansi"
                  value={formData.unitFakultasInstansi}
                  onChange={handleChange}
                  placeholder="Input"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 flex flex-col justify-between">
              {/* Jenis Insiden */}
              <div className="flex flex-col h-full gap-1">
                <label
                  htmlFor="jenisInsiden"
                  className="block text-sm font-medium text-gray-700"
                >
                  Jenis Insiden
                </label>
                <select
                  id="jenisInsiden"
                  name="jenisInsiden"
                  value={formData.jenisInsiden}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                >
                  <option
                    value=""
                    disabled
                  >
                    Menu Item
                  </option>
                  <option value="phishing">Phishing</option>
                  <option value="malware">Malware</option>
                  <option value="ddos">DDoS</option>
                  <option value="dataLeak">Data Leak</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Deskripsi Insiden */}
              <div className="flex flex-col h-full gap-1">
                <label
                  htmlFor="deskripsiInsiden"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Deskripsi Insiden
                </label>
                <textarea
                  id="deskripsiInsiden"
                  name="deskripsiInsiden"
                  value={formData.deskripsiInsiden}
                  onChange={handleChange}
                  placeholder="Input"
                  rows="4"
                  className="w-full h-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Bukti Pendukung */}
              <div className="flex flex-col h-full gap-1">
                <label
                  htmlFor="buktiPendukung"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bukti Pendukung
                </label>
                <textarea
                  id="buktiPendukung"
                  name="buktiPendukung"
                  value={formData.buktiPendukung}
                  onChange={handleChange}
                  placeholder="Input"
                  rows="4"
                  className="w-full h-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-15">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 text-white px-6 py-2 rounded-full transition duration-200"
              style={{
                background: isFormValid
                  ? "linear-gradient(230deg,rgba(39, 163, 157, 1) 0%, rgba(8, 20, 35, 1) 100%)"
                  : "linear-gradient(230deg,rgba(39, 163, 157, 0.7) 0%, rgba(8, 20, 35, 0.7) 100%)",
              }}
            >
              <SubmitIcon />
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportFormPage;
