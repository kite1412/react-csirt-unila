import { useState } from "react";
import SubmitIcon from "../assets/submitIcon.svg?react";
import TeleponIcon from "../assets/teleponIcon.svg?react";
import MailIcon from "../assets/mailIcon.svg?react";
import AlamatIcon from "../assets/alamatIcon.svg?react";

function ContactPage() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    alamatEmail: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAnyEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (isAnyEmpty) {
      alert("Harap lengkapi semua data terlebih dahulu!");
      return;
    }

    console.log("Form submitted:", formData);
    //backend
  };

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="pb-30 px-20 flex flex-col items-center w-full gap-10 bg-white">
      <div
        className="w-full h-120 bg-[#081423] absolute"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
      ></div>
      <h1 className="font-semibold text-white text-2xl z-1 pt-10">
        KONTAK KAMI
      </h1>

      <div className="flex w-full h-fit justify-center gap-5 z-1 text-white">
        <div className="flex flex-col rounded-xl border-t-3 border-b-3 border-1 border-white w-sm p-5 gap-2">
          <div className="flex gap-2 items-center">
            <TeleponIcon className="w-4" />{" "}
            <span className="font-semibold">Telepon</span>
          </div>
          <span>+088-234-567-90</span>
        </div>
        <div className="flex flex-col rounded-xl border-t-3 border-b-3 border-1 border-white w-sm p-5 gap-2">
          <div className="flex gap-2 items-center">
            <MailIcon className="w-4" />
            <span className="font-semibold">Email</span>
          </div>
          <span>humas@kpa.unila.ac.id</span>
        </div>
        <div className="flex flex-col rounded-xl border-t-3 border-b-3 border-1 border-white w-sm p-5 gap-2">
          <div className="flex gap-2 items-center">
            <AlamatIcon className="w-3" />
            <span className="font-semibold">Alamat</span>
          </div>
          <span>Jl. Prof. Dr. Ir. Sumantri Brojonegoro No. 1</span>
        </div>
      </div>

      <div className="flex w-full gap-10 z-1 my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.321778409765!2d105.2406075750311!3d-5.367796194611014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dacaa8bd24e3%3A0x364afe668b3cbb49!2sJl.%20Prof.%20Dr.%20Ir.%20Sumantri%20Brojonegoro%20No.1%2C%20Gedong%20Meneng%2C%20Kec.%20Rajabasa%2C%20Kota%20Bandar%20Lampung%2C%20Lampung!5e0!3m2!1sid!2sid!4v1747296859524!5m2!1sid!2sid"
          // width="600"
          // height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />

        <form
          onSubmit={handleSubmit}
          className="rounded-xl text-black flex flex-col w-full bg-white shadow-sm shadow-black/30 "
          // style={{
          //   background:
          //     "linear-gradient(230deg,rgba(19, 104, 109, 1) 0%, rgba(8, 20, 35, 1) 100%)",
          // }}
        >
          <span className="font-semibold border-b-2 border-gray-300 px-5 py-5">
            Kirimkan pesan kepada kami
          </span>
          <div className="flex w-full gap-5 p-5">
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="namaLengkap"
                className="text-sm font-medium"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="namaLengkap"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleChange}
                placeholder="Nama lengkap Anda"
                className="text-black w-full rounded-sm border border-gray-400  px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="alamatEmail"
                className="text-sm font-medium"
              >
                Alamat Email
              </label>
              <input
                type="email"
                id="alamatEmail"
                name="alamatEmail"
                value={formData.alamatEmail}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="text-black w-full rounded-sm border border-gray-400 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="w-full h-full px-5 flex flex-col gap-2 ">
            <label
              htmlFor="pesan"
              className="text-sm font-medium"
            >
              Pesan Anda
            </label>
            <textarea
              type="text"
              id="pesan"
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              placeholder=""
              className="text-black w-full min-h-60 rounded-sm border border-gray-400  px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full flex justify-end px-5">
            <button
              type="submit"
              className="w-fit h-fit flex items-center justify-center gap-2 text-white px-6 py-2 rounded-full transition duration-200 my-5"
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
}

export default ContactPage;
