import BackgroundGlow from "@/components/BackgroundGlow";

export default function Home() {
  return (
    <main className="min-h-screen bg-white grid place-items-center">
      {/* Effect */}
      <BackgroundGlow />

      <div className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <header className="space-y-6">
          <h1 className="flex items-baseline gap-4">
            <span className="text-5xl font-semibold tracking-tight">Syu</span>
            <span className="text-4xl font-light text-neutral-400">| Web Engineer</span>
          </h1>

          <p className="text-xl leading-relaxed text-neutral-700">
            エンジニアリングの力で、美しくインタラクティブなプロダクト体験を創り出す。
          </p>
        </header>

        {/* Value bullets */}
        <section className="mt-14">
          <ul className="space-y-10 text-lg leading-9 text-neutral-600">
            <li className="flex gap-4">
              <p>・デザインの意図を深く理解し、ピクセルパーフェクトな実装と滑らかなインタラクションを追求します。</p>
            </li>
            <li className="flex gap-4">
              <p>・チームの垣根を越えてコミュニケーションを取り、プロジェクトを確実かつ迅速に推進します。</p>
            </li>
            <li className="flex gap-4">
              <p>・パフォーマンスの最適化や品質向上に継続的に取り組み、より良いユーザー体験を提供します。</p>
            </li>
          </ul>

        </section>

        {/* Footer links */}
        <footer className="mt-16 border-t border-neutral-200 pt-10">
          <nav className="flex gap-10 text-neutral-600">
            <a className="hover:text-neutral-900" href="#">GitHub</a>
            <a className="hover:text-neutral-900" href="#">Wantedly</a>
            <a className="hover:text-neutral-900" href="#">Email</a>
          </nav>
        </footer>
      </div>
    </main>
  );
}