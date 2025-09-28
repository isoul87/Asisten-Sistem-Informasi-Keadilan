 // --- Daftar File 1 ---
        const pdfFiles1 = [
            "src/pdf/Form Pengesahan Anak Angkat.pdf",
            "src/pdf/form Permohonan Penetapan anak.pdf",
            "src/pdf/form_Permohonan_perubahan_nama_pada_akta_kelahiran_pemohon1ORG_1.pdf",
            "src/pdf/form_memori_keberatan_1.pdf",
            "src/pdf/form_permohonan_akta_kematian.pdf",
            "src/pdf/form_permohonan_ijin_menjual_1.pdf",
            // ... (lanjutkan daftar file pertama jika ada)
        ];

        // --- Daftar File 2 ---
        const pdfFiles2 = [
            "src/pdf/BAHAN AKTUALISASI/Penetapan Anak/Permohonan Penetapan anak Pasangan meninggal.pdf",
            "src/pdf/BAHAN AKTUALISASI/Penetapan Anak/form Permohonan Penetapan anak.pdf",
            "src/pdf/BAHAN AKTUALISASI/Pengangkatan anak/Form Pengesahan Anak Angkat.pdf",
            "src/pdf/BAHAN AKTUALISASI/Permohonan Ganti nama/Permohonan Ganti Nama Sertifikat.pdf",
            "src/pdf/BAHAN AKTUALISASI/Pengangkatan anak/Form Pengesahan Anak Angkat.pdf",
            "src/pdf/BAHAN AKTUALISASI/Permohonan Ganti nama/Permohonan Ganti Nama.pdf",
            "src/pdf/BAHAN AKTUALISASI/Wali anak/perwalian Anak kandung dibawah umur.pdf",
            "src/pdf/BAHAN AKTUALISASI/Wali anak/Surat permohonan Perwalian  TNI.pdf",
            "src/pdf/BAHAN AKTUALISASI/Wali anak/Wali Anak ( Ponakan) Waris dibawah umur.pdf",
            // ... (lanjutkan daftar file kedua jika ada)
        ];

        // Fungsi untuk membuat judul yang bersih dari path file
        function createTitleFromFile(path) {
            let fileName = path.split("/").pop().replace(".pdf", "");
            fileName = fileName.replace(/_1$/, "").replace(/_1ORG_1$/, "");
            fileName = fileName.replace(/_/g, " ");
            return fileName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        }

        // --- Fungsi yang dapat digunakan kembali untuk membuat daftar ---
        function generateFormList(fileArray, listId) {
            const formList = document.getElementById(listId);
            if (!formList) return; // Hentikan jika elemen tidak ditemukan

            fileArray.forEach(filePath => {
                const listItem = document.createElement("li");
                const cardDiv = document.createElement("div");
                cardDiv.className = "flex flex-col gap-8 px-5 py-10 shadow-lg bg-white rounded-lg";

                const title = document.createElement("p");
                title.className = "truncate font-medium text-gray-700";
                title.textContent = createTitleFromFile(filePath);

                const button = document.createElement("button");
                button.className = "bg-green-400 px-7 w-28 text-center py-3 rounded-full text-white font-bold hover:bg-green-500 transition-colors";

                const link = document.createElement("a");
                link.href = filePath;
                link.target = "_blank";
                link.textContent = "View";

                button.appendChild(link);
                cardDiv.appendChild(title);
                cardDiv.appendChild(button);
                listItem.appendChild(cardDiv);
                formList.appendChild(listItem);
            });
        }

        // --- Jalankan fungsi untuk setiap daftar saat halaman dimuat ---
        document.addEventListener("DOMContentLoaded", () => {
            generateFormList(pdfFiles1, "form-list-1");
            generateFormList(pdfFiles2, "form-list-2");
        });