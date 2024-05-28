
// Translation function
function translate(language) {
    const translations = {
        english: {
            chooseLanguage: "Choose Your Language:",
            enterBMS: "Please key in your BMS ID ",
            bmsIdPlaceholder: "Key in your BMS ID here.",

            bmsIdPlaceholder: "Key in your BMS ID here.",

            chooseYourReferrerPreferred: "Choose for your referrer his preferred",
            languageLabel: "Language:",
            locationLabel: "Working location:",
            jobLabel: "Job Position:",
            nextButton: "Next",
            HowtoButton: "How To!",
            thankYou: "Thank you for your referral!",
            referralMessage1: "As we grow into Malaysia, become #MoreTogether as we #ElevateAsia, here are the links your friend can use so this is tagged to your profile into our Recruiting System.",
            shareWhatsApp: "Share via WhatsApp",
            shareLine: "Share via Line",
            qrCodeMessage: "or have your friend scanning this code above!",
            vrMessage: "They can visit our locations in VR so they learn of us:",
            talentTeamMessage: "The Talent Attraction Team",
            BackButton: "Back"
    
        },
        korean: {
            chooseLanguage: "사용 언어를 선택 해 주세요 :",
            enterBMS: "BMS ID(사원번호)를 입력 해 주세요   ",
            bmsIdPlaceholder: "BMS ID(사원번호)를 입력 해 주세요  ",

            chooseYourReferrerPreferred: "지인추천 상세 입력 ",
            languageLabel: "언어:",
            locationLabel: "업무장소:",
            jobLabel: "지원포지션:",
            nextButton: "다음",
            thankYou: "지인분을 추천 해 주셔서 감사합니다.",
            referralMessage1: "회사의 성장과 함께 #ElevateAsia  #MoreTogether 등의 움직임으로 향해 나아가고 있습니다. 이 링크를 통해 같이 성장해 나아갈 지인들의 추천등록을 부탁드립니다.",
            shareWhatsApp: "왓츠앱을 통한 공유",
            shareLine: "라인을 통한 공유",
            qrCodeMessage: "또는 이 코드를 통해 지인을 추천부탁드립니다.",
            vrMessage: "VR을 통해 좀더 저희회사에 대해 자세히 알아 보십시오 : ",
            talentTeamMessage: "채용담당팀",
             HowtoButton: "H어떻게	!",
             BackButton: "뒤로"
     

        },
        thai: {
            chooseLanguage: "เลือกภาษาของคุณ  :",
            enterBMS: " กรุณาใส่รหัส BMS ของคุณ  ",
            bmsIdPlaceholder: "กรุณาใส่หมายเลข BMS ของคุณที่นี่ ",

            chooseYourReferrerPreferred: "กรุณากรอกข้อมูลเพื่อนของคุณ ",
            languageLabel: "ภาษา:",
            locationLabel: "สถานที่ทำงาน :",
            jobLabel: "ตำแหน่งงาน :",
            nextButton: "ถัดไป",
            thankYou: "ขอบคุณที่แนะนำเพื่อนของคุณ!",
            referralMessage1: "เมื่อธุรกิจเราเติบโตขึ้นในประเทศมาเลเซีย มาร่วม #MoreTogether ในฐานะ #ElevateAsia กับเรากันเถอะ  คุณสามารถส่งลิ้งค์นี้ให้เพื่อนเพื่อใช้แท็กโปรไฟล์ของคุณระบบสมัครงานของเรา",
            shareWhatsApp: "แชร์ผ่าน WhatsApp",
            shareLine: "แชร์ผ่าน Line",
            qrCodeMessage: "หรือขอให้เพื่อนของคุณสแกนโค้ดด้านบน!",
            vrMessage: "เพื่อนของคุณสามารถเยี่ยมชมสถานที่ของเราใน VR เพื่อเรียนรู้เกี่ยวกับเราได้",
            talentTeamMessage: "ทีม Talent Attraction",
            HowtoButton: "วิธีการ",
            BackButton: "กลับ"
    

        },
        malay: {
            chooseLanguage: "Pilih Bahasa Anda   :",
            enterBMS: " ila Masukkan BMS ID Anda ",
            bmsIdPlaceholder: "Sila Masukkan BMS ID Andy di sini  ",

            chooseYourReferrerPreferred: "Sila pilih pilihan rujukan anda",
            languageLabel: "Bahasa:",
            locationLabel: "Lokasi bekerja:",
            jobLabel: "Jawatan kerja  :",
            nextButton: "Seterusnya",
            thankYou: "Terima kasih atas rujukan anda!",
            referralMessage1: "Apabila kita berkembang ke Malaysia, menjadi #MoreTogether sambil kita #ElevateAsia, berikut adalah pautan yang boleh digunakan oleh rakan anda supaya ini ditandakan pada profil anda ke dalam Sistem Perekrutan kami.",
            shareWhatsApp: "Kongsi melalui WhatsApp",
            shareLine: "Kongsi melalui Line",
            qrCodeMessage: "atau minta rakan anda mengimbas kod ini di atas!",
            vrMessage: "Mereka boleh melawat lokasi kami dalam VR supaya mereka mengetahui tentang kami:",
            talentTeamMessage: "Pasukan Tarikan Bakat",
            HowtoButton: "Bagaimana Untuk",
            BackButton: "Kembali"
    

        },
        mandarin: {
            chooseLanguage: "请选择您的语言 ",
            enterBMS: "请输入您的 BMS 识别码 ",
            bmsIdPlaceholder: "“在这里输入您的 BMS 识别码 ",

            chooseYourReferrerPreferred: "请选择以下的推荐选项 ",
            languageLabel: "语言:",
            locationLabel: "工作地点 ：",
            jobLabel: "工作岗位 ：",
            nextButton: "下一步",

            thankYou: "感谢您的推荐!",
            referralMessage1: "#MoreTogether当我们#ElevateAsia, 这是您的朋友可以使用的链接，因此这将标记到我们的招聘系统中您的个人资料。随着我们进军马来西亚，让我们一起成为 #MoreTogether，一起 #ElevateAsia，以下是您的朋友可以使用的链接，以便将此标记到我们的招聘系统中",
            shareWhatsApp: "通过 WhatsApp 分享",
            shareLine: "通过 Line 分享",
            qrCodeMessage: "或者让您的朋友扫描以上的二维码！",
            vrMessage: "他们可以通过虚拟现实参观我们的位置，以便他们了解我们：",
            talentTeamMessage: "人才招聘团队",
            HowtoButton: "操作方法!",
            BackButton: "返回"
    
        },
       
        japanese: {
     chooseLanguage: "言語を選択:",
        enterBMS: "BMS IDの入力",
        bmsIdPlaceholder: "BMS IDを入力して下さい.",

        chooseYourReferrerPreferred: "紹介したい方の情報を選択 ",
        languageLabel: "言語:",
        locationLabel: "勤務地 :",
        jobLabel: "職名 :",
        nextButton: "次に進む",

        thankYou: "友人をご紹介いただき、ありがとうございます！",
        referralMessage: "当社がマレーシアで成長するにつれ、#ElevateAsiaそして #MoreTogether の実現に近づいています。こちらのリンクをご利用頂くことで、あなたのプロフィールにタグ付けされて当社の採用システムに追加されます。",
        shareWhatsApp: "WhatsAppで共有",
        shareLine: "LINEで共有",
        qrCodeMessage: "または上のコードを友達にスキャンしてもらいまし ょう ！",
        vrMessage: "VRで勤務地を訪問してもらい、当社についてさらに知ってもらいましょう：",
        talentTeamMessage: "タレントアトラクションチームより",
        HowtoButton: "どうする!",
        BackButton: "元に戻る"

    }     };

    return translations[language];
}

// Update page content based on selected language
function updatePageContent(language) {
    const translations = translate(language);

    // Update labels and texts
    document.querySelector(".language-selection label").textContent = translations.chooseLanguage;
    document.querySelector("#step1 h2").textContent = translations.enterBMS;
    document.querySelector("#bms-id").placeholder = translations.bmsIdPlaceholder;
    document.querySelectorAll("#step1 h2")[1].textContent = translations.chooseYourReferrerPreferred;

    document.querySelectorAll("#step1 h3")[0].textContent = translations.languageLabel;
    document.querySelectorAll("#step1 h3")[1].textContent = translations.locationLabel;
    document.querySelectorAll("#step1 h3")[2].textContent = translations.jobLabel;
    document.querySelector("#step1 button").textContent = translations.nextButton;
    document.querySelector("#step1 button1").textContent = translations.HowtoButton;


    document.querySelector("#step2 h2").textContent = translations.thankYou;
    document.querySelector("#step2 button").textContent = translations.BackButton;

    document.querySelector("#step2 p:nth-of-type(1)").textContent = translations.referralMessage1;
    document.querySelector("#share-button-whatsapp").textContent = translations.shareWhatsApp;
    document.querySelector("#share-button-line").textContent = translations.shareLine;

    document.querySelector("#scan-code-button").textContent = translations.qrCodeMessage;
    document.querySelector("#thank-you").textContent = translations.thankYou;
    document.querySelector("#referral-message").textContent = translations.referralMessage1;
    document.querySelector("#vr-message").textContent = translations.vrMessage;
    document.querySelector("#talent-team-message").textContent = translations.talentTeamMessage;


    // Update options in select elements
    updateLanguageSelectOptions();
    
}

document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    const locationSelect = document.getElementById('location-select');
    const jobSelect = document.getElementById('job-type-select');
    const jobTitleDisplay = document.getElementById('job-title-display');
    const jobLinkDisplay = document.getElementById('job-link-display');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const generatedLink = document.getElementById('generated-link');
    const qrImg = document.getElementById('qrImg');
// Event listener for language changes
document.getElementById("emp-lang-select").addEventListener("change", function() {
    const selectedLanguage = this.value;
    updatePageContent(selectedLanguage);
});

    let jsonData = [];

    // Fetch JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            populatePreferredLanguages(jsonData);
        })
        .catch(error => console.error('Error loading JSON data:', error));

    // Populate preferred languages based on JSON data
    function populatePreferredLanguages(data) {
        const languages = [...new Set(data.map(item => item.Language))];
        populateDropdown(languageSelect, languages);
    }

    // Populate locations based on selected language
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        const locations = [...new Set(jsonData.filter(item => item.Language === selectedLanguage).map(item => item.Location))];
        populateDropdown(locationSelect, locations);
        populateDropdown(jobSelect, []); // Reset job dropdown
    });

    // Populate jobs based on selected language and location
    locationSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        const selectedLocation = this.value;
        const jobs = jsonData.filter(item => item.Language === selectedLanguage && item.Location === selectedLocation).map(item => item.Positions);
        populateDropdown(jobSelect, jobs);
    });

    // Display job title and link
    jobSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value;
        const selectedJob = this.value;
        const jobData = jsonData.find(item => item.Language === selectedLanguage && item.Location === selectedLocation && item.Positions === selectedJob);

        if (jobData) {
            jobTitleDisplay.textContent = jobData["Evergreen title"];
            jobLinkDisplay.textContent = jobData["Evergreen link"];
            jobLinkDisplay.href = jobData["Evergreen link"];
        }
    });

    // Move to the next step and display the generated link
    window.nextStep = function() {
        step1.style.display = 'none';
        step2.style.display = 'block';

        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value;
        const selectedJob = jobSelect.value;
        const jobData = jsonData.find(item => item.Language === selectedLanguage && item.Location === selectedLocation && item.Positions === selectedJob);

        if (jobData) {
            const bmsId = document.getElementById('bms-id').value;
            const finalLink = jobData["Evergreen link"] + '/' + bmsId;
            generatedLink.textContent = finalLink;
            generatedLink.href = finalLink;
            generateQrCode(finalLink);
        }
    };

    // Function to populate dropdown options
    function populateDropdown(dropdown, options) {
        dropdown.innerHTML = '<option value="">Select</option>';
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            dropdown.appendChild(opt);
        });
    }

    // Function to generate QR code
    function generateQrCode(url) {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
        qrImg.src = qrCodeUrl;
    }
});
window.nextStep = function() {
    step1.style.display = 'none';
    step2.style.display = 'block';

    const selectedLanguage = languageSelect.value;
    const selectedLocation = locationSelect.value;
    const selectedJob = jobSelect.value;
    const jobData = jsonData.find(item => item.Language === selectedLanguage && item.Location === selectedLocation && item.Positions === selectedJob);

    if (jobData) {
        const bmsId = document.getElementById('bms-id').value;
        const finalLink = jobData["Evergreen link"] + '/' + bmsId; // Append BMS ID to the job's link
        generatedLink.textContent = finalLink;
        generatedLink.href = finalLink;
        generateQrCode(finalLink);
    }
};
 // Open How To link in the same window
 document.querySelector("#how-to a").onclick = function(event) {
    event.preventDefault();
    window.location.href = "HowtoVid.html";
};
// Request prompt as last message
window.onload = function() {
    var prompts = document.querySelectorAll('.popup-content > div:not(.additional-logo):not(#how-to)');
    var lastPrompt = prompts[prompts.length - 1];
    lastPrompt.innerHTML += " ";
};
function refreshPage() {
    location.reload();
}