import BackgroundGlow from "@/components/BackgroundGlow";

export default function Home() {
  // const email = "111@aaa.com";
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Python",
  ];

  return (
    <main className="flex min-h-dvh items-center justify-center bg-zinc-50 px-4 py-10 text-zinc-900 sm:px-6 sm:py-14">
      {/* 背景のアニメーション効果 */}
      <BackgroundGlow />

      <div className="relative z-10 w-full max-w-3xl px-7 py-14 sm:px-10 sm:py-20">
        <header className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-bold text-zinc-700 sm:text-6xl">
              Syu / Web Engineer
            </h1>
          </div>

          <div className="space-y-4 text-base leading-loose text-zinc-600 sm:text-lg">
            <p className="text-sm font-semibold tracking-tight text-zinc-500">
              【経歴】 Python/JavaScriptの実務経験約5年。大規模ECサイトのフルスタック開発に従事していました。
            </p>
            <p className="text-sm font-semibold tracking-tight text-zinc-500">
              【性格】 INTJ（建築家）。分析力と細部への鋭い着眼点を武器に、本質的な課題解決に取り組みます。
            </p>
          </div>
        </header>

        {/* セクション分割線 */}
        <hr className="my-10 h-px w-full border-0 bg-zinc-200/70" />

        <section className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700">
              Value
            </h2>
            <ul className="space-y-3 text-base leading-loose text-zinc-600 sm:text-m">
              <li>主体的にプロジェクトを推進する</li>
              <li>認識のズレを防ぎ、手戻りを減らす</li>
              <li>学び続け、改善を積み重ねる姿勢</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700">
              Tech
            </h2>
            <ul className="flex flex-wrap gap-3">
              {techStack.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 ring-1 ring-zinc-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700">
              Now
            </h2>
            <p className="text-base leading-loose text-zinc-600 sm:text-m">
              このポートフォリオサイトを改善中
            </p>
          </section>

        </section>

        <footer className="mt-14 flex flex-col gap-3 text-xs text-zinc-500 sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Syu</p>
          {/* <a
            href={`mailto:${email}`}
            className="w-fit underline-offset-4 hover:underline"
          >
            {email}
          </a> */}
        </footer>
      </div>
    </main>
  );
}
