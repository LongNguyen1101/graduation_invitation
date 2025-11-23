"use client"

import { useState, useEffect } from "react"

export default function GraduationInvitation() {
  const [opened, setOpened] = useState(false)
  const [stars, setStars] = useState<
    Array<{ id: number; left: number; delay: number; size: number; duration: number }>
  >([])

  useEffect(() => {
    if (opened && stars.length === 0) {
      const newStars = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1,
        size: 6 + Math.random() * 6,
        duration: 12 + Math.random() * 4,
      }))
      setStars(newStars)
    }
  }, [opened, stars.length])

  return (
    <main
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/placeholder.svg?height=1080&width=1920&query=school+building+historic+architecture)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Falling Stars Container */}
      {opened && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 50 }}>
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute"
              style={{
                left: `${star.left}%`,
                top: "-20px",
                animation: `fall ${star.duration}s linear ${star.delay}s infinite`,
              }}
            >
              <svg width={star.size} height={star.size} viewBox="0 0 24 24" className="opacity-80">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="#8b6f47"
                />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Envelope Container */}
      <div className="relative w-full max-w-2xl h-screen md:h-auto flex items-center justify-center">
        {!opened && (
          <div onClick={() => setOpened(true)} className="cursor-pointer group w-full max-w-md relative">
            {/* Envelope Back */}
            <div
              className="relative rounded-sm shadow-2xl overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50 border border-amber-200"
              style={{
                backgroundColor: "#f9f3e6",
                aspectRatio: "1.5 / 1",
              }}
            >
              {/* Envelope Body Base */}
              <div className="absolute inset-0 flex flex-col">
                {/* Top half */}
                <div className="flex-1" style={{ backgroundColor: "#f9f3e6" }} />
                {/* Bottom half */}
                <div className="flex-1" style={{ backgroundColor: "#f9f3e6" }} />
              </div>

              {/* Decorative Wax Seal */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div
                  className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center text-3xl"
                  style={{
                    backgroundColor: "#d4a574",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2), 0 4px 12px rgba(212, 165, 116, 0.4)",
                  }}
                >
                  🎓
                </div>
              </div>

              {/* Envelope Flap - Added realistic triangular flap that opens on click */}
              <div
                className="absolute top-0 left-0 right-0 transition-all duration-700 ease-out origin-top"
                style={{
                  width: "100%",
                  height: "50%",
                  background: `linear-gradient(135deg, #e8dcc6 50%, #e8dcc6 50%)`,
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  transform: "perspective(1000px) rotateX(0deg)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.3)",
                  borderBottom: "3px solid #c99a66",
                }}
              />

              {/* Front Flap overlay */}
              <div
                className="absolute top-0 left-0 right-0 transition-all duration-700 ease-out origin-top"
                style={{
                  width: "100%",
                  height: "50%",
                  background: `linear-gradient(to bottom, #e8dcc6, #d9cbb8)`,
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  transform: "perspective(1000px) rotateX(0deg)",
                  boxShadow: "inset 0 2px 4px rgba(255,255,255,0.4), 0 3px 10px rgba(0,0,0,0.12)",
                  borderBottom: "3px solid #c99a66",
                }}
              />
            </div>

            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                zIndex: 20,
              }}
            >
              <div
                className="w-28 h-28 rounded-full shadow-lg flex items-center justify-center border-4 flex-col justify-center"
                style={{
                  backgroundColor: "#fffbf7",
                  borderColor: "#d4a574",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2), inset 0 1px 3px rgba(255,255,255,0.5)",
                }}
              >
                {/* Graduation cap */}
                <div className="text-5xl">🎓</div>
                {/* Decorative text */}
                <p className="text-xs mt-2 tracking-widest uppercase" style={{ color: "#8b7355" }}>
                  2025
                </p>
              </div>
            </div>
          </div>
        )}

        {opened && (
          <div
            className="absolute w-full max-w-md animate-pull-out"
            style={{
              animation: "pullOut 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              zIndex: 40,
            }}
          >
            <div
              className="bg-white shadow-2xl rounded-sm p-8 md:p-12 relative"
              style={{
                backgroundColor: "#fffbf7",
                border: "1px solid #d4a574",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <div className="space-y-5">
                {/* Header Greeting */}
                <div className="animate-fade-in text-center space-y-3">
                  <h2 className="text-xs tracking-widest uppercase" style={{ color: "#8b7355" }}>
                    Thư mời
                  </h2>
                  <h1
                    className="text-3xl md:text-4xl font-serif"
                    style={{ color: "#5d4e37", fontFamily: '"Playfair Display", serif' }}
                  >
                    Lễ Tốt Nghiệp
                  </h1>
                </div>

                {/* Graduation Illustration */}
                {/* <div className="animate-fade-in flex justify-center py-4" style={{ animationDelay: "0.2s" }}>
                  <svg width="100" height="120" viewBox="0 0 120 140" className="drop-shadow-lg">
                    <rect x="35" y="45" width="50" height="60" fill="#5d4e37" />
                    <rect x="25" y="35" width="70" height="12" fill="#5d4e37" />
                    <rect x="55" y="25" width="10" height="10" fill="#5d4e37" />
                    <line x1="60" y1="35" x2="60" y2="50" stroke="#d4a574" strokeWidth="2" />
                    <circle cx="60" cy="30" r="10" fill="#d4a574" />
                    <rect x="80" y="60" width="20" height="30" fill="#f5deb3" stroke="#8b7355" strokeWidth="1.5" />
                    <circle cx="82" cy="62" r="1.5" fill="#8b7355" />
                  </svg>
                </div> */}
                <div className="flex justify-center items-center py-10">  
                  <div className="text-8xl">🎓</div>
                </div>


                {/* Decorative Divider */}
                <div className="animate-fade-in flex justify-center gap-3" style={{ animationDelay: "0.4s" }}>
                  <div className="w-6 h-px" style={{ backgroundColor: "#d4a574" }}></div>
                  <span className="text-xs">✦</span>
                  <div className="w-6 h-px" style={{ backgroundColor: "#d4a574" }}></div>
                </div>

                {/* Event Details */}
                <div
                  className="animate-fade-in space-y-4 py-3 border-t border-b"
                  style={{
                    animationDelay: "0.6s",
                    borderColor: "#d4a574",
                  }}
                >
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#8b7355" }}>
                      Con/em kính mời cậu Hiển, cô Trinh và các anh chị em đến tham dự
                    </p>

                    <div className="space-y-3">
                      <div>
                        <p className="text-xs mb-1" style={{ color: "#8b7355" }}>
                          Lễ tốt nghiệp của
                        </p>
                        <p className="text-lg font-serif" style={{ color: "#5d4e37" }}>
                          con/em  NGUYỄN HOÀNG LONG
                        </p>
                      </div>

                      <div>
                        <p className="text-xs mb-1" style={{ color: "#8b7355" }}>
                          Vào lúc
                        </p>
                        <p className="text-lg font-serif" style={{ color: "#5d4e37" }}>
                          10h30 ngày 27/11/2025
                        </p>
                      </div>

                      <div>
                        <a 
                          href="https://maps.app.goo.gl/KZKvDtdtXE8h5Biv9" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block hover:opacity-80 transition-opacity"
                        >
                          <p className="text-xs mb-1" style={{ color: "#8b7355" }}>
                            Tại
                          </p>
                          <p className="text-lg font-serif underline" style={{ color: "#5d4e37" }}>
                            Trường Đại học Công nghệ Thông tin (UIT)
                          </p>
                          <p>Đại học Quốc gia TP. HCM</p>
                          <p className="text-sm mt-2" style={{ color: "#8b7355" }}>
                            Cổng A, Khu phố 34, Phường Linh Xuân
                          </p>
                          <p className="text-sm mt-2" style={{ color: "#8b7355" }}>
                            Thành phố Hồ Chí Minh
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Closing Message */}
                <div className="animate-fade-in text-center space-y-2" style={{ animationDelay: "0.8s" }}>
                <p className="text-sm mt-2" style={{ color: "#8b7355" }}>
                  SĐT liên hệ: <a href="tel:0908561071" style={{ color: "inherit", textDecoration: "underline" }}>0908 561 071</a>
                </p>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#a68568" }}>
                    Xin Cảm Ơn
                  </p>
                </div>

                {/* Decorative Footer */}
                <div className="animate-fade-in flex justify-center gap-3 pt-2" style={{ animationDelay: "1s" }}>
                  {[3, 2, 3].map((size, i) => (
                    <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: "#d4a574" }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pullOut {
          0% {
            transform: translateY(120px) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-pull-out {
          animation: pullOut 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-fall {
          animation: fall 4s linear infinite;
        }
      `}</style>
    </main>
  )
}
