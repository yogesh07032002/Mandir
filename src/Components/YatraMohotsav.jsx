import { FaCalendarAlt, FaMapMarkerAlt, FaOm } from "react-icons/fa";

import React from "react";

const YatraMahotsav = () => {
  return (
    <div className="bg-yellow-50 text-gray-800 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-700">
            श्री खंडोबा देव यात्रा महोत्सव
          </h1>
          <p className="mt-3 text-lg font-semibold text-gray-700">
            “येळकोट येळकोट जय मल्हार”
          </p>
        </div>

        {/* Info Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
            <FaCalendarAlt />
            यात्रा : 3/01/2026
          </div>

          <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
            <FaMapMarkerAlt />
            मैलारपूर, नळदुर्ग (तुळजापूर)
          </div>

          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            <FaOm />
            जागृत देवस्थान
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 text-justify leading-relaxed text-gray-700">
          <p>
            महाराष्ट्र-कर्नाटक-आंध्र प्रदेशसह राज्यातील लाखो भाविकांचे श्रद्धास्थान
            असलेल्या तुळजापूर तालुक्यातील मैलारपूर नळदुर्ग येथील जागृत देवस्थान
            श्री खंडोबा देवाचा यात्रा महोत्सव दि. २ ते ४ जानेवारी दरम्यान
            मोठ्या उत्साहात संपन्न होणार आहे.
          </p>

          <p>
            “येळकोट येळकोट जय मल्हार” जयघोषाने आणि भंडाऱ्याचे मुक्त हस्ते उधळण
            करणाऱ्या भाविकांनी नळदुर्ग परिसर सुवर्णमय होणार आहे. या यात्रेसाठी
            सहा ते सात लाख भाविक उपस्थित राहण्याचा अंदाज आहे.
          </p>

          <p>
            श्री खंडोबा हा महादेवाचा अवतार असून महाराष्ट्रातील खंडोबाच्या
            बारा स्थानांपैकी मैलारपूर हे दुसरे प्रमुख स्थान मानले जाते.
            श्री खंडोबा आणि बाणाई यांचा विवाह याच पवित्र ठिकाणी झाला
            अशी आख्यायिका आहे.
          </p>

          <p>
            यात्रेचा मुख्य दिवस शनिवार, ३ जानेवारी रोजी असून पहाटे
            महाअभिषेक व महापूजा संपन्न होईल. दिवसभर भाविकांचे नवस फेडणे,
            पारंपरिक वाघ्या-मुरळी नृत्य आणि विविध धार्मिक कार्यक्रम होतील.
          </p>

          <p>
            यात्रेचे प्रमुख आकर्षण म्हणजे विविध गावांतून येणारे मानकरी
            नंदीध्वज व काठया. रात्री १२ वाजता अणदूर-नळदुर्ग येथील मानाच्या
            काट्याचे मंदिरात आगमन होईल. आतषबाजी व शोभेची दारू
            नेत्रदीपक असते.
          </p>

          <p>
            दिनांक ४ जानेवारी रोजी राज्यस्तरीय भव्य कुस्ती स्पर्धा
            आयोजित करण्यात आली असून राज्यातील नामांकित मल्ल
            सहभागी होणार आहेत. लाखोंचे बक्षीस वितरण ही या स्पर्धेची खासियत आहे.
          </p>

          <p>
            भाविकांच्या सोयीसाठी दर्शन रांगा, आकर्षक विद्युत रोषणाई,
            तसेच अचूक बंदोबस्त करण्यात आला आहे.
            यात्रा यशस्वी होण्यासाठी मंदिर समिती, यात्रा कमिटी
            आणि नळदुर्ग नगरपरिषद अहोरात्र परिश्रम घेत आहेत.
          </p>
        </div>

        {/* Footer / Hashtags */}
        <div className="mt-10 text-center text-red-700 font-semibold">
          <p>#श्री_खंडोबा_मुख्यपुजारी_अणदूर_नळदुर्ग_मैलारपूर</p>
          <p>#अभिजीत_मोकाशे</p>
        </div>
      </div>
    </div>
  );
};

export default YatraMahotsav;




