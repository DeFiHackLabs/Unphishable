import { useEffect, useRef, useState } from "react";

// 擴展全局 Window 接口
declare global {
  interface Window {
    THREE: any;
    VANTA: {
      HALO: (options: any) => {
        destroy: () => void;
      };
      [key: string]: any;
    };
  }
}

export default function Banner() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let vantaInstance: { destroy: () => void } | undefined;

    // 動態載入腳本
    const loadScripts = async () => {
      // 使用類型斷言處理 window.THREE 檢查
      if (!(window as any).THREE) {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
      }

      // 使用類型斷言處理 window.VANTA 檢查
      if (!(window as any).VANTA || !(window as any).VANTA.HALO) {
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js");
      }

      // 腳本加載後，再次檢查並使用類型斷言
      if ((window as any).VANTA && (window as any).VANTA.HALO && vantaRef.current) {
        vantaInstance = (window as any).VANTA.HALO({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0xff46bb,
          backgroundColor: 0x0B0B0C,
          amplitudeFactor: 3.0,
          xOffset: 0.03,
          yOffset: 0.5,
          size: 3.0,
        });
        if (vantaInstance) {
          setVantaEffect(vantaInstance);
        }
      }
    };

    loadScripts();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const loadScript = (src: string): Promise<Event> => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = (event) => resolve(event);
      script.onerror = (error) => reject(error);
      document.body.appendChild(script);
    });
  };

  return (
    <div
      ref={vantaRef}
      style={{
        top: '70px',
        width: "100%",
        height: "200px", // 你可以自定高度
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "2rem",
        fontWeight: "bold",
        position: "relative",
        zIndex: 0,
        pointerEvents: "none",
        marginBottom: "70px",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* 你的內容放在這裡 */}
      </div>
    </div>
  );
}