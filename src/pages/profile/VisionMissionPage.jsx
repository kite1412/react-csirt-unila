import TextBox from "../../components/TextBox";
import ContentVerticalPadding from "../../layout/ContentVerticalPadding";

export default function VisionMissionPage() {
  return <ContentVerticalPadding>
    <div className="flex flex-col w-fit mx-auto gap-10">
      <h3 className="font-bold text-2xl">VISI & MISI</h3>
      <TextBox
        title={"VISI"}
        paragraph={
          "Menjadi tim respons insiden keamanan siber yang andal, profesional, dan proaktif dalam menjaga keamanan informasi dan teknologi dilingkungan Universitas Lampung."
        }
      />

      <TextBox
        title={"MISI"}
        paragraph={
          <ol className="list-decimal list-outside mx-[18px]">
            <li>
              Meningkatkan Ketangguhan Keamanan Siber: Mengembangkan dan
              menerapkan strategi respons yang efektif terhadap insiden
              keamanan informasi di lingkungan Universitas Lampung
            </li>
            <li>
              Pencegahan dan Deteksi Dini: Melakukan identifikasi, pemantauan,
              dan mitigasi terhadap potensi ancaman keamanan secara
              berkelanjutan
            </li>
            <li>
              Pengembangan Kompetensi: Meningkatkan kapasitas dan keterampilan
              tim dalam menghadapi tantangan keamanan siber melalui pelatihan
              dan kolaborasi
            </li>
            <li>
              Membangun Kesadaran Keamanan Informasi: Meningkatkan pemahaman
              dan kesadaran seluruh sivitas akademika mengenai pentingnya
              keamanan informasi
            </li>
            <li>
              Kolaborasi dan Inovasi: Menjalin kerja sama dengan berbagai
              pihak, baik internal maupun eksternal, untuk memperkuat sistem
              pertahanan keamanan siber
            </li>
          </ol>
        }
      />
    </div>
  </ContentVerticalPadding>;
}
