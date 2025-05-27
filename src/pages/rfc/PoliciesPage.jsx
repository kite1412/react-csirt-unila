import RfcLayout from "./layout/RfcLayout";

export default function PoliciesPage() {
  return <RfcLayout className="flex flex-col gap-6">
    <h3 className="font-bold text-2xl">Kebijakan CSIRT</h3>
    <div className="flex flex-col gap-4 font-medium">
      <p className="font-bold">1. Tipe Insiden dan Tingkatan Dukungan</p>
      <p>
        Unila-CSIRT memiliki otoritas untuk menangani insiden yaitu:
        <br /> a. Web Defacement;
        <br /> b. DDOS;
        <br /> c. Malware;
        <br /> d. Phising;
      </p>
      <p>
        Dukungan yang diberikan oleh UnilaCSIRT kepada konstituen dapat bervariasi bergantung dari jenis dan dampak insiden.
      </p>
      <p className="font-bold">2. Kerjasama, Interaksi dan Pengungkapan Informasi</p>
      <p>
        Unila-CSIRT akan melakukan kerjasama dan berbagi informasi dengan CSIRT atau organisasi lainnya dalam lingkup keamanan siber. 
        Seluruh Informasi yang diterima oleh Unila-CSIRT akan dirahasiakan.
      </p>
      <p className="font-bold">3. Komunikasi dan Autentikasi</p>
      <p>
        Untuk komunikasi biasa, Unila-CSIRT dapat menggunakan alamat e-mail dan telepon.
      </p>
    </div>
  </RfcLayout>
}