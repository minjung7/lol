export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
          type="video/webm"
        />
      </video>
      <div className="relative text-center max-w-3xl p-8 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-4">
          리그 오브 레전드란?
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          리그 오브 레전드는 5명의 강력한 챔피언으로 구성된 양 팀이 서로의
          기지를 파괴하기 위해 치열한 사투를 벌이는 전략 게임입니다. 140여 명의
          챔피언 중 하나를 선택해 화려한 플레이를 펼치며 적을 처치하고 포탑을
          파괴해 승리를 쟁취하세요.
        </p>
      </div>
    </div>
  );
}
