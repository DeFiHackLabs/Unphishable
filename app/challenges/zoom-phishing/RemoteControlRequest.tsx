import React, { useState } from "react";

interface RemoteControlRequestProps {
  onAccept: () => void;
  onDecline: () => void;
}

const RemoteControlRequest: React.FC<RemoteControlRequestProps> = ({
  onAccept,
  onDecline,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-blue-600 text-white px-4 py-2 flex items-center">
          <div className="w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-xs font-bold mr-2">Z</div>
          <span className="font-semibold">Zoom</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">允許遠端控制</h3>
          <p className="text-gray-600 mb-6">
            Aureon Capital (主持人) 想要遠端控制您的電腦。請確認是否允許？
          </p>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onDecline}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              拒絕
            </button>
            <button
              onClick={onAccept}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 relative ${isHovering ? "animate-pulse" : ""
                }`}
            >
              允許
              {isHovering && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-red-600 text-white p-2 rounded shadow-lg whitespace-nowrap text-xs animate-bounce">
                  危險！點擊此處將授予完全控制權
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteControlRequest;
