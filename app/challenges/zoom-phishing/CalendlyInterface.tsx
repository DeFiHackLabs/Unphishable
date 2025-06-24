import React, { useState, useEffect, use } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface CalendlyInterfaceProps {
  onComplete: (date: string, time: string) => void;
}

export default function CalendlyInterface({ onComplete }: CalendlyInterfaceProps) {
  const { t, language } = useLanguage();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectLocaleDateString, setSelectLocaleDateString] = useState<string>("en-US");
  const [step, setStep] = useState(1);
  const [dates, setDates] = useState<string[]>([]);
  const times = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

  // 生成基於今天日期的未來6天日期
  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const futureDates = [];

      for (let i = 1; i <= 5; i++) {
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + i);
        futureDates.push(futureDate.toISOString().split('T')[0]);
      }

      setDates(futureDates);
    };

    generateDates();
  }, []);

  useEffect(() => {
    switch (language) {
      case 'zh-hant':
        setSelectLocaleDateString("zh-TW");
        break;
      case 'zh-hans':
        setSelectLocaleDateString("zh-CN");
        break;
      default:
        setSelectLocaleDateString("en-US");
    }
  }, [language]);
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setStep(2);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleConfirm = () => {
    setTimeout(() => {
      onComplete(selectedDate, selectedTime);
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">{t.zoomPhishing.calendly.title}</h2>
          <p className="text-gray-600">{t.zoomPhishing.calendly.subtitle}</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-full max-w-md">
            {step === 1 && (
              <div>
                <h3 className="font-medium mb-3">{t.zoomPhishing.calendly.selectDate}:</h3>
                <div className="grid grid-cols-5 gap-2">
                  {dates.map((date) => (
                    <button
                      key={date}
                      className={`border p-2 rounded ${selectedDate === date ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => handleDateSelect(date)}>
                      {new Date(date).toLocaleDateString(selectLocaleDateString, { month: 'short', day: 'numeric' })}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-medium mb-3">{t.zoomPhishing.calendly.selectTime}:</h3>
                <div className="grid grid-cols-4 gap-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      className={`border p-2 rounded ${selectedTime === time ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => handleTimeSelect(time)}>
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <div className="mb-4 p-4 bg-gray-50 rounded">
                  <h3 className="font-bold mb-2">{t.zoomPhishing.calendly.selectedTime}:</h3>
                  <p>{selectedDate} {selectedTime}</p>
                </div>
                <button
                  onClick={handleConfirm}
                  className="bg-blue-500 text-white px-6 py-2 rounded">
                  {t.zoomPhishing.calendly.confirmButton}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}
