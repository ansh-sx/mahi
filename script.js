// Language toggle functionality
const enBtn = document.getElementById("en-btn");
const hiBtn = document.getElementById("hi-btn");
const textElements = {
  text1: {
    en: "Mahi, a 4-year-old boy from Sunderbani, J&K, has been diagnosed with Blood Cancer. He is undergoing treatment at the Paediatric Oncology Ward at DMC Ludhiana. His parents cannot bear the treatment expenses.",
    hi: "माही, जम्मू और कश्मीर के सुंदरबनी का 4 वर्षीय लड़का, ब्लड कैंसर से पीड़ित है। वह डीएमसी लुधियाना के बाल चिकित्सा ऑन्कोलॉजी वार्ड में इलाज करवा रहा है। उसके माता-पिता उपचार के खर्च का बोझ वहन नहीं कर सकते।"
  },
  text2: {
    en: "This is an appeal to extend your support. Collectively, we can make a difference and save this precious life.",
    hi: "यह आपकी सहायता का अनुरोध है। सामूहिक रूप से, हम एक बदलाव ला सकते हैं और इस अनमोल जीवन को बचा सकते हैं।"
  },
  text3: {
    en: "Please avoid visiting their home or informing them directly. They are already under immense emotional pressure and may feel shame. Your contribution will be a discreet yet impactful way to support them.",
    hi: "कृपया उनके घर जाने या उन्हें सीधे सूचित करने से बचें। वे पहले से ही जबरदस्त भावनात्मक दबाव में हैं और शर्म महसूस कर सकते हैं। आपका योगदान उन्हें सहायता प्रदान करने का एक गोपनीय और प्रभावी तरीका होगा।"
  },
  text4: {
    en: "Pay here or scan this QR code: 8493041860",
    hi: "यहां भुगतान करें या इस QR कोड को स्कैन करें: 8493041860"
  }
};

// Function to toggle language
function toggleLanguage(lang) {
  Object.keys(textElements).forEach(id => {
    document.getElementById(id).textContent = textElements[id][lang];
  });

  enBtn.classList.toggle("active", lang === "en");
  hiBtn.classList.toggle("active", lang === "hi");
}

// Add event listeners for language buttons
enBtn.addEventListener("click", () => toggleLanguage("en"));
hiBtn.addEventListener("click", () => toggleLanguage("hi"));

// Modal functionality
const donateBtn = document.getElementById("donate-btn");
const modal = document.getElementById("donate-modal");
const closeModal = document.getElementById("close-modal");

// Open modal when Donate button is clicked
donateBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Close modal when Close button is clicked
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Share on WhatsApp with full message and image
const shareBtn = document.getElementById("share-btn");
shareBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  const message = encodeURIComponent(
    `Help Mahi! A 4-year-old fighting blood cancer needs your help. 
Donate to save his life by scanning the QR code or contacting us directly: 8493041860. 
Let's save a precious life together!`
  );
  const url = `https://wa.me/?text=${message}`;
  window.open(url, "_blank");
});

// Download image functionality
const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "share.png";
  link.download = "Help_Mahi.png";
  link.click();
});
