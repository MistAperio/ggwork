function App() {
  return (
    <div className="atmosphere relative min-h-screen w-full flex flex-col text-ink">
      {/* Header — split editorial label */}
      <header className="relative z-10 px-6 sm:px-10 md:px-14 pt-7 md:pt-9">
        <div className="flex items-center justify-between gap-4">
          <span className="label-eyebrow text-ink-soft">网络连通性测试</span>
          <span className="label-eyebrow text-muted text-right">Network Reachability</span>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 sm:px-10">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-12 items-center gap-6 md:gap-10">
            {/* left vertical rule for editorial weight */}
            <div className="hidden md:block col-span-1">
              <div className="vrule h-40 mx-auto" />
            </div>

            <div className="col-span-12 md:col-span-11">
              <p className="rise-1 label-eyebrow text-muted mb-5 md:mb-7">
                status · 200 OK
              </p>

              <h1 className="rise-2 font-display font-light text-ink leading-[1.18] tracking-[-0.01em] text-[clamp(1.6rem,3.6vw,3rem)]">
                恭喜你，你的网络正常！
                <span
                  className="emoji-float ml-3 md:ml-5 align-[-0.18em] text-[1.1em]"
                  role="img"
                  aria-label="sparkles"
                >
                  ✨
                </span>
              </h1>

              <p className="rise-3 mt-6 md:mt-8 font-display italic text-muted text-[clamp(0.95rem,1.2vw,1.1rem)] max-w-2xl">
                Honestly, this website doesn&apos;t actually do anything — awa.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 sm:px-10 md:px-14 pb-7 md:pb-9">
        <div className="rule mb-5" />
        <div className="flex flex-row items-center justify-between gap-3 flex-wrap">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noreferrer noopener"
            className="label-eyebrow text-muted hover:text-accent transition-colors inline-flex items-center gap-2 group"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12 2.5l8 3.5v6c0 5-3.5 8.5-8 9.5-4.5-1-8-4.5-8-9.5v-6l8-3.5z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span>鄂ICP备2026028109号-1</span>
          </a>
          <span className="label-eyebrow text-muted">© 2026 · ggwork</span>
        </div>
      </footer>
    </div>
  )
}

export default App
